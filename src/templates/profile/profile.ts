import Block from '../../../Block';
import profile from './profile.hbs';

type TProfilePageProps = {
  title?: string
};

export default class ProfilePage extends Block {
  constructor(props: TProfilePageProps) {
    super('div', props);
  }

  render() {
    return this.compile(profile, this.props);
  }
}
