import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IBaseSelectElement} from "../../../interfaces/shared.interface";

@Component({
  selector: 'app-categories-selector',
  templateUrl: './categories-selector.component.html',
  styleUrls: ['./categories-selector.component.scss']
})
export class CategoriesSelectorComponent {

  @Input() title: string = 'Item';
  @Input() elements: IBaseSelectElement[];
  @Input() isDisabled: boolean = false;

  @Output() onSelect: EventEmitter<IBaseSelectElement> = new EventEmitter<IBaseSelectElement>();

  selectElement(element: IBaseSelectElement) {
    this.onSelect.emit(element);
  }
}
