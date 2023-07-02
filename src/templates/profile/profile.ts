import Block from "../../../utils/Block";
import profile from './profile.hbs';

type TProfilePageProps = {
  title?: string
};

export class ProfilePage extends Block<TProfilePageProps> {
  constructor(props: TProfilePageProps) {
    super('div', props);
  };

  render() {
    return this.compile(profile, this.props)
  }
}
