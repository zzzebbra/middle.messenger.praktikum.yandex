import Block from '../../../utils/Block';
import profileTitle from './profileTitle.hbs';

type TProfileTitle = {
  title: string
  events: {
    click: () => void
  }
};

export default class ProfileTitle extends Block {
  constructor(props: TProfileTitle) {
    super('div', props);
  }

  render() {
    return this.compile(profileTitle, this.props);
  }
}
