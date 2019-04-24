import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemStateService} from '../../services/item-state.service';

@Component({
  selector: 'app-item-listicle',
  templateUrl: './item-listicle.component.html',
  styleUrls: ['./item-listicle.component.css']
})
export class ItemListicleComponent implements OnInit {
  // Props
  @Input() id;
  @Input() name;
  @Input() selected: boolean;

  // Events
  @Output() deleted = new EventEmitter<number>();

  editMode = false;
  priority = 'h';

  constructor(
    private itemStateService: ItemStateService
  ) {
  }

  ngOnInit() {
  }

  toggleSelected() {
    this.selected = !this.selected;
    this.itemStateService.changeSelected(this.id, this.selected);
  }

  destroyItem() {
    this.itemStateService.deleteItem(this.id);
  }

  changeItemName(event, name) {
    if (event.key === 'Enter' || event instanceof FocusEvent) {
      this.name = name;
      this.editMode = false;
      this.itemStateService.editItem(this.id, name);
    }
  }

  changePriority(priority) {
    this.priority = priority;
  }

}
