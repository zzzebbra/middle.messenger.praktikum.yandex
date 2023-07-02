import Block from '../../../utils/Block';
import profileTitle from './profileTitle.hbs';

interface TProfileTitle {
  title: string
  events: {
    click: () => void
  }
}

export class ProfileTitle extends Block<TProfileTitle> {
  constructor(props: TProfileTitle) {
    super('div', props);
  }

  render() {
    return this.compile(profileTitle, this.props);
  }
}
