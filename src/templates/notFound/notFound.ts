import Block from '../../../utils/Block';
import notFound from './notFound.hbs';

interface TNotFoundPageProps {
  title?: string
}

export class NotFoundPage extends Block<TNotFoundPageProps> {
  constructor(props: TNotFoundPageProps) {
    super('div', props);
  }

  render() {
    return this.compile(notFound, this.props);
  }
}
