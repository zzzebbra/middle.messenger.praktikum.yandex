import Block from '../../../utils/Block';
import register from './register.hbs';

interface TRegisterPageProps {
  title?: string
}

export class RegisterPage extends Block<TRegisterPageProps> {
  constructor(props: TRegisterPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(register, this.props);
  }
}
