import Block from '../../../utils/Block';
import avatar from './avatar.hbs';

type TAvatarProps = {
  link: string,
  events: {
    click: () => void;
  }
}

export class Avatar extends Block<TAvatarProps> {
  constructor(props: TAvatarProps) {
    super('div', props);
  }

  render() {
    return this.compile(avatar, this.props)
  }
}
