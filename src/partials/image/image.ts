import Block from '../../../utils/Block';
import image from './image.hbs';

type TImageProps = {
  link: string,
  extraImageClass?: string,
  events: {
    click: () => void;
  }
}

export class Image extends Block<TImageProps> {
  constructor(props: TImageProps) {
    super('div', props);
  }

  render() {
    return this.compile(image, this.props)
  }
}
