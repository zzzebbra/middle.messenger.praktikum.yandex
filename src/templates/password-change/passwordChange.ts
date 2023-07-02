import Block from "../../../utils/Block";
import passwordChange from './passwordChange.hbs'

type TPasswordChangePageProps = {
  title?: string
};

export class PasswordChangePage extends Block<TPasswordChangePageProps> {
  constructor(props: TPasswordChangePageProps) {
    super('div', props);
  };

  render() {
    return this.compile(passwordChange, this.props)
  }
}
