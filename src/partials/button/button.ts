import Block from '../../../Block';
import button from './button.hbs';

type TButtonProps = {
  buttonText?: string
  type: string
  buttonExtraClass?: string
  events: {
    click: (e: Event) => void
  }
};

export default class Button extends Block {
  constructor(props: TButtonProps) {
    super('div', props);
  }

  render() {
    return this.compile(button, this.props);
  }
}
