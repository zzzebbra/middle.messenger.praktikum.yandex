import Block from '../../../utils/Block';
import notFound from './notFound.hbs';

type TNotFoundPageProps = {
  title?: string
};

export default class NotFoundPage extends Block {
  constructor(props: TNotFoundPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(notFound, this.props);
  }
}
