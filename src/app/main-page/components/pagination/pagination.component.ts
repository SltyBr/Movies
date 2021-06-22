import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{

  @Input() pageNumber: number = 0;
  @Input() totalPages: number = 0;

  @Output() getFirstPageEmmiter: EventEmitter<number> = new EventEmitter();
  @Output() getLastPageEmmiter: EventEmitter<number> = new EventEmitter();

  getFirstPage(){
    this.getFirstPageEmmiter.emit();
  }

  getLastPage(){
    this.getLastPageEmmiter.emit();
  }

  toggleClass(){
      
  }
}
