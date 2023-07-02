import Block from "../../../utils/Block";
import { Button } from "../../partials/button/button";
import { Input } from "../../partials/input/input";
import { Avatar } from "../../partials/avatar/avatar";
import { ProfileTitle } from "../../partials/profileTitle/profileTitle";
import { ProfileText } from "../../partials/profileText/profileText";
import profileChange from './profileChange.hbs'

type TProfileChangeProps = {
  title?: string
};

export class ProfileChangePage extends Block<TProfileChangeProps> {
  constructor(props: TProfileChangeProps) {
    super('div', props);
  };

  render() {
    return this.compile(profileChange, this.props)
  }
}
