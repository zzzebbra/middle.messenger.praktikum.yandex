import Block from '../../../utils/Block';
import button from './button.hbs';

interface TButtonProps {
  buttonText?: string
  type: string
  buttonExtraClass?: string
  events: {
    click: (e: Event) => void
  }
}

export default class Button extends Block<TButtonProps> {
  constructor(props: TButtonProps) {
    super('div', props);
  }

  render() {
    return this.compile(button, this.props);
  }
}
