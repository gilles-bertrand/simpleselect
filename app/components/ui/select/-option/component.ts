import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface UiSelectOptionArgs {
    setSelectedOptionIn:(item:unknown)=>{},
    text:string,
    value:string | number
}

export default class UiSelectOption extends Component<UiSelectOptionArgs> {

    @tracked guid = `${guidFor(this)}-TPK-listbox-option`
    @action
    handleClick(e:MouseEvent){
        e.preventDefault();
        e.stopPropagation();
        // console.log( this.args)
        this.args.setSelectedOptionIn(this);
    }
}
