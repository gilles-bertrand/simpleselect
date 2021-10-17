import { modifier } from "ember-modifier";
import { createFocusTrap } from "focus-trap";

export default modifier(function tpkFocusTrap(
  element: HTMLElement,
  _params,
  { focusTrapOptions }: any = {},
) {
    console.log(element)
  let trap = createFocusTrap(element, focusTrapOptions);
  trap.activate();
  return () => {
    trap.deactivate();
  };
});
