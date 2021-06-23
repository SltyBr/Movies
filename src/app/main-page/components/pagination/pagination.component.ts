import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent{
  @Input() pageNumber!: number;
  @Input() totalPages!: number;

  @Output() onClickChangePage = new EventEmitter<number>();

  getPage(pageNumber: number): void{
    this.onClickChangePage.emit(pageNumber);
  }
}
