import Block from '../../../utils/Block';
import login from './login.hbs';

type TLoginPageProps = {
  title?: string
};

export default class LoginPage extends Block {
  constructor(props: TLoginPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(login, this.props);
  }
}
