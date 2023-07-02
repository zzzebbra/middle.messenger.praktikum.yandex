import Block from '../../../utils/Block';
import profileText from './profileText.hbs';

interface TProfileText {
  text: string
  events: {
    click: () => void
  }
}

export class ProfileText extends Block<TProfileText> {
  constructor(props: TProfileText) {
    super('div', props);
  }

  render() {
    return this.compile(profileText, this.props);
  }
}
