import { action } from '@ember/object';
import Component from '@glimmer/component';

interface UiSelectOptionsArgs {}

export default class UiSelectOptions extends Component<UiSelectOptionsArgs> {
    @action
    clickOutside(){
        console.log('eeee')
    }
}
