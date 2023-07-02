import Block from "../../../utils/Block";
import modalTitle from './modalTitle.hbs';

type TModalTitleProps = {
  title: string,
  events: {
    click: () => void;
  }
}

export class ModalTitle extends Block<TModalTitleProps> {
  constructor(props: TModalTitleProps) {
    super('div', props);
  }

  render() {
    return this.compile(modalTitle, this.props)
  }
}
