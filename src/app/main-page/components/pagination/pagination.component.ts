import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{

  @Input() pageNumber: number = 0;
  @Input() totalPages: number = 0;

  @Output() onBtnClick: EventEmitter<number> = new EventEmitter<number>();

  getPage(page: number){
    this.onBtnClick.emit(page);
  }
}
