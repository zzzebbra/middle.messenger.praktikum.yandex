import Block from '../../../utils/Block';
import passwordChange from './passwordChange.hbs';

type TPasswordChangePageProps = {
  title?: string
};

export default class PasswordChangePage extends Block {
  constructor(props: TPasswordChangePageProps) {
    super('div', props);
  }

  render() {
    return this.compile(passwordChange, this.props);
  }
}
