import {Component,OnInit} from '@angular/core';
import {BookService} from '../common/books.service';
import {NgFor} from '@angular/common';
import {Book} from '../common/book.model';
import {Router} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';
 @Component({
     selector: 'booklist',
  template: `<h1>hello<h1>
   <ul >
   <li  (click)="router.navigate(['/book', book.id])" *ngFor="let book of booklist | paginate: { itemsPerPage: 10, currentPage: p }"> 
   <span>{{book.id}} - {{book.title}}</span>
   </li>
   </ul>
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
    ` ,
    providers:[BookService]  
 })

export class BookListComponent implements OnInit {
        booklist: Book[]=[] ;
        
        constructor(private _bookService : BookService, private router: Router) {}//_bookService is a local variale

  ngOnInit() {

    this.booklist = this._bookService.getBooks();
    
  } 
 
}
