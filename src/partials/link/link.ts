import Block from '../../../Block';
import link from './link.hbs';

type TLinkProps = {
  url: string
  urlName: string
  extraClass?: string
  events: {
    click: () => void
  }
};

export default class Link extends Block {
  constructor(props: TLinkProps) {
    super('div', props);
  }

  render() {
    return this.compile(link, this.props);
  }
}
