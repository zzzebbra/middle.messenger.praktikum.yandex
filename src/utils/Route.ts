import Block from '../../Block';
import isEqual from './functions';

interface BlockConstructable<P = any> {
  new(props: P): Block;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = '';

  root.append(block.getContent()!);

  return root;
}

export default class Route {
  private block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: BlockConstructable,
    private readonly query: string,
  ) {
  }

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      // eslint-disable-next-line new-cap
      this.block = new this.blockClass({});

      render(this.query, this.block);
    }
  }
}
