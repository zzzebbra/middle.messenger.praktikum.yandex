import Block from '../../../Block';
import chatWindow from './chatWindow.hbs';

type TChatWindowPageProps = {
  title?: string
};

export default class ChatWindowPage extends Block {
  constructor(props: TChatWindowPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(chatWindow, this.props);
  }
}
