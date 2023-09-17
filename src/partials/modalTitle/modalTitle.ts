import Block from '../../../Block';
import modalTitle from './modalTitle.hbs';

type TModalTitleProps = {
  title: string
  events: {
    click: () => void
  }
};

export default class ModalTitle extends Block {
  constructor(props: TModalTitleProps) {
    super('div', props);
  }

  render() {
    return this.compile(modalTitle, this.props);
  }
}
