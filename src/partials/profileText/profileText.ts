import Block from '../../../utils/Block';
import profileText from './profileText.hbs';

type TProfileText = {
  text: string
  events: {
    click: () => void
  }
};

export default class ProfileText extends Block {
  constructor(props: TProfileText) {
    super('div', props);
  }

  render() {
    return this.compile(profileText, this.props);
  }
}
