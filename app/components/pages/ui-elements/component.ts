import Component from "@glimmer/component";

interface PagesUiElementsArgs {}

export default class PagesUiElements extends Component<PagesUiElementsArgs> {
  options = [{ text: "stephane meermans", value: 1 }, {
    text: "gilles Bertrand",
    value: 2,
  }];
}
