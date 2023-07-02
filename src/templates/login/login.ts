import Block from "../../../utils/Block";
import login from './login.hbs';

type TLoginPageProps = {
  title?: string
};

export class LoginPage extends Block<TLoginPageProps> {
  constructor(props: TLoginPageProps) {
    super('div', props);
  };

  render() {
    return this.compile(login, this.props)
  }
}
