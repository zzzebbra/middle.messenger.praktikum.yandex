import EventBus from "./EventBus";

type Meta = {
  tagName: string,
   props: {}
}

type Props = Record<string, any>;

class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _element: HTMLElement | null = null;
  _meta:  Meta | null = null;
  props: Props;
  eventBus: () => EventBus;

  constructor(tagName: string = "div", props: object = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const tagName  = this._meta?.tagName;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount({});
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount(oldProps: {}) { }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = nextProps => {
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
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element!.innerHTML = block;
  }

  // Может переопределять пользователь, необязательно трогать
  render() {
    return ""
   }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: {}) {
    const proxyProps = new Proxy(props, {
      get(target, prop: string) {
        if (prop.startsWith('_')) {
          throw new Error("Нет прав");
        } else {
          let value = target[prop];
          return (typeof value === 'function') ? value.bind(target) : value; // (*)
        }
      },
      deleteProperty(target, prop) { // перехватываем удаление свойства

        throw new Error("Нет прав");

        return true;

      },
    })
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return proxyProps;
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = "block";
  }

  hide() {
    this.getContent()!.style.display = "none";
  }
}
