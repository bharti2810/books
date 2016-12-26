import {Component,OnInit} from '@angular/core';
import {BookService} from '../common/books.service';
import {Book} from '../common/book.model';
import {Router} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';

 @Component({
  selector: 'booklist',
  template: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<h1 align = "center" >List of Books</h1><br>
<div class="container">
    <table class="table table-hover table-striped" >
      <thead>
        <tr >
          <th >Book Id</th>
          <th >Book Title</th>
        </tr>
      </thead>
      <tbody >
        <tr [routerLink]= "['/book', book.id]" *ngFor="let book of _bookService.getBooks() | paginate: { itemsPerPage: 10, currentPage: p }">
          <td >{{book.id}}</td>  
          <td >{{book.title}}</td>
        </tr>
      </tbody>
    </table>
 <pagination-controls (pageChange)="p = $event"></pagination-controls>
</div>
    ` ,
  styleUrls: ['app/common/style.css','app/book/booklist.component.css'],
 })

export class BookListComponent implements OnInit {
  booklist: Book[]=[] ;
  book: Book = new Book();
  constructor(private _bookService : BookService, private router: Router) {}//_bookService is a local variable

ngOnInit() {
  this.booklist = this._bookService.getBooks();
  } 
}

 

