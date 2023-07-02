import Block from '../../../utils/Block';
import register from './register.hbs';

type TRegisterPageProps = {
  title?: string
};

export default class RegisterPage extends Block {
  constructor(props: TRegisterPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(register, this.props);
  }
}
