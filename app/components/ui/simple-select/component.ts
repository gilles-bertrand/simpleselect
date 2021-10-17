import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import UiSelectOption from '../select/-option/component';

interface UiSimpleSelectArgs {
    options: SelectOption[]
}
interface SelectOption {
    text:string;
    value:any
}
export default class UiSimpleSelect extends Component<UiSimpleSelectArgs> {

    @tracked isOpen = false;
    @tracked selectedOption ;
    buttonElement?: HTMLElement=undefined;

    constructor(owner:unknown,args:UiSimpleSelectArgs){
        super(owner,args);
        this.selectedOption=this.args.options[0];
    }

    @action
    toggleOptions(){
        this.isOpen = !this.isOpen;
    }
    @action
    closeOptions() {
      this.isOpen = false;
    }

    @action
    setSelectedOption(item:UiSelectOption){
        console.log(item)
    }

    @action
    handleClickOutside() {
    //   for (let i = 0; i < e.path?.length; i++) {
    //     if (e.path[i] === this.buttonElement) {
    //       return true;
    //     }
    //   }
    console.log("this.handleClickOutside")
  
      this.closeOptions();
  
      return true;
    }
}
