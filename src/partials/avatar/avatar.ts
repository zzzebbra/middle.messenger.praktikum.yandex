import Block from '../../../utils/Block';
import avatar from './avatar.hbs';

interface TAvatarProps {
  link: string
  events: {
    click: () => void
  }
}

export default class Avatar extends Block<TAvatarProps> {
  constructor(props: TAvatarProps) {
    super('div', props);
  }

  render(): DocumentFragment {
    return this.compile(avatar, this.props);
  }
}
