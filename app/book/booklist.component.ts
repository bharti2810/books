import {Component,OnInit} from '@angular/core';
import {BookService} from '../common/books.service';
import {NgFor} from '@angular/common';
import {Book} from '../common/book.model';
import {Router} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ActivatedRoute, Params} from '@angular/router';
 @Component({
     selector: 'booklist',
  template: `<h1>booklist<h1>

   <ul >
   <li  (click)="router.navigate(['/book', book.id])" *ngFor="let book of _bookService.getBooks() | paginate: { itemsPerPage: 10, currentPage: p }"> 
   <span>{{book.id}} - {{book.title}}</span>

   </li>
   </ul>
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
    ` 
 })

export class BookListComponent implements OnInit {
         booklist: Book[]=[] ;
       book: Book = new Book();
        constructor(private _bookService : BookService, private router: Router) {}//_bookService is a local variable

  ngOnInit() {

    this.booklist = this._bookService.getBooks();
  
  } 
  
}

 

