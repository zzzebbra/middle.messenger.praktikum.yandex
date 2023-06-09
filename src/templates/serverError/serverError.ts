import Block from '../../../utils/Block';
import serverError from './serverError.hbs';

type TServerErrorPageProps = {
  title?: string
};

export default class ServerErrorPage extends Block {
  constructor(props: TServerErrorPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(serverError, this.props);
  }
}
