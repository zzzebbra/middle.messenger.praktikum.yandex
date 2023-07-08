import Block from '../../../utils/Block';
import chat from './chat.hbs';

type TChatProps = {
  name: string
  avatar: string
  chatExtraClass?: string
  events: {
    click: (e: Event) => void
  }
};

export default class Chat extends Block {
  constructor(props: TChatProps) {
    super('div', props);
  }

  render() {
    return this.compile(chat, this.props);
  }
}
