import Block from '../../../utils/Block';
import profileChange from './profileChange.hbs';

type TProfileChangeProps = {
  title?: string
};

export default class ProfileChangePage extends Block {
  constructor(props: TProfileChangeProps) {
    super('div', props);
  }

  render() {
    return this.compile(profileChange, this.props);
  }
}
