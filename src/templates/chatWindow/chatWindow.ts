import Block from "../../../utils/Block";
import chatWindow from './chatWindow.hbs'

type TChatWindowPageProps = {
  title?: string
};

export class ChatWindowPage extends Block<TChatWindowPageProps> {
  constructor(props: TChatWindowPageProps) {
    super('div', props);
  };

  render() {
    return this.compile(chatWindow, this.props)
  }
}
