import Block from '../../../utils/Block';
import link from './link.hbs';

interface TLinkProps {
  url: string
  urlName: string
  extraClass?: string
  events: {
    click: () => void
  }
}

export class Link extends Block<TLinkProps> {
  constructor(props: TLinkProps) {
    super('div', props);
  }

  render() {
    return this.compile(link, this.props);
  }
}
