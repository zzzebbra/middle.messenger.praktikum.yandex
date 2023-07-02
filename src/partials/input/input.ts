import Block from '../../../utils/Block';
import input from './input.hbs';

type TInputProps = {
  labelName?: string
  type: string
  name: string
  placeholder?: string
  extraClass?: string
  disabled?: string
  validationPattern?: string
  errorText?: string
  events: Record<string, (e: Event) => void>
};

export default class Input extends Block {
  constructor(props: TInputProps) {
    super('div', props);
  }

  render() {
    return this.compile(input, this.props);
  }
}
