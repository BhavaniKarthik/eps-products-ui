import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SortField } from "../../models/sort-field";
import { SortOrder } from "../../enums/sort-order.enum";

@Component({
  selector: "app-product-list-header-item",
  templateUrl: "./product-list-header-item.component.html",
  styleUrls: ["./product-list-header-item.component.scss"]
})
export class ProductListHeaderItemComponent implements OnInit {
  SORT_ORDER = SortOrder;
  @Input("sortBy") sortByFieldName: string;
  @Input() displayText: string;
  @Input() sortField: SortField;

  @Output() sort = new EventEmitter<SortField>();
  constructor() {}

  ngOnInit() {}

  emitSort() {
    this._toggleSortOrderIfFieldSameAsLastSorted();
    this.sortField.name = this.sortByFieldName;
    this.sort.emit(this.sortField);
  }

  private _toggleSortOrderIfFieldSameAsLastSorted(){
    if(this.sortField.name === this.sortByFieldName){
      if (this.sortField.order === SortOrder.ASC) {
        this.sortField.order = SortOrder.DESC;
      } else {
        this.sortField.order = SortOrder.ASC;
      }
    } else {
      this.sortField.order = SortOrder.ASC;
    }
  }
}
