import Block from '../../../Block';
import avatar from './avatar.hbs';

type TAvatarProps = {
  link: string
  events: {
    click: () => void
  }
};

export default class Avatar extends Block {
  constructor(props: TAvatarProps) {
    super('div', props);
  }

  render(): DocumentFragment {
    return this.compile(avatar, this.props);
  }
}
