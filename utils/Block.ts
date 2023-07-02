import { nanoid } from 'nanoid';
import EventBus from './EventBus';

export type P = Record<string, unknown>;

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);

  private _element: HTMLElement | null = null;

  private readonly _meta: { tagName: string, props: P };

  protected props: P;

  private readonly eventBus: () => EventBus;

  public children: Record<string, Block>;

  // eslint-disable-next-line @typescript-eslint/default-param-last
  constructor(tagName: string = 'div', propsWithChildren: P) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      tagName,
      props,
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: P): { props: P, children: Record<string, Block> } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  _addEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const tagName = this._meta?.tagName;
    this._element = this._createDocumentElement(tagName);
  }

  private _init() {
    this._createResources();

    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {
    // this._createResources();
    // this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount() { }

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    Object.values(this.children).forEach((child) => { child.dispatchComponentDidMount(); });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: P, newProps: P) {
    if (JSON.stringify(oldProps) !== JSON.stringify((newProps))) {
      return true;
    }
    return false;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();

    this._element!.innerHTML = '';

    this._element!.append(block);

    this._addEvents();
  }

  protected compile(template: (context: Record<string, unknown>) => string, context: Record<string, unknown>) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      // тут в component может быть не инстанс блока, а массив инстансов блока, соответственно,
      // нужно переписать так, чтобы был проход по массиву
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');
    temp.innerHTML = html;

    Object.entries(this.children).forEach(([, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (stub == null) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getContent()!);
    });

    return temp.content;
  }

  // Может переопределять пользователь, необязательно трогать
  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: P) {
    const proxyProps = new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        // eslint-disable-next-line no-param-reassign
        target[prop as keyof P] = value;
        // @ts-expect-error - нет такого в хендлере прокси, но оно необходимо
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

        return true;
      },
      deleteProperty() {
        throw new Error('Access denied');
      },
    });

    return proxyProps;
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
