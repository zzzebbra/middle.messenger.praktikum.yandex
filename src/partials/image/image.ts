import Block from '../../../utils/Block';
import image from './image.hbs';

type TImageProps = {
  link: string
  extraImageClass?: string
  events: {
    click: () => void
  }
};

export default class Image extends Block {
  constructor(props: TImageProps) {
    super('div', props);
  }

  render() {
    return this.compile(image, this.props);
  }
}
