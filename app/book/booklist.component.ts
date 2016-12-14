import {Component,OnInit} from '@angular/core';
import {BookService} from '../common/books.service';
import {NgFor} from '@angular/common';
import {Book} from '../common/book.model';
 
 @Component({
     selector: 'booklist',
  template: `<h1>hello<h1>
 <div *ngFor="let booklist of Book" value="{{booklist}}">{{booklist.code}} - {{booklist.name}}</div>
<div class="book-list" (click)="doExperiment()">
  <h3>
    {{ book.is }}
  </h3>
  <p>
    {{ book.title }}
    {{book.publicationYear}}
    {{book.lanaguge}}
  </p>
  <p>
    <strong>{{book.author}}</strong>
  </p>
</div>

`,
  providers: [BookService] })

export class BookListComponent  {
        booklist: Book[] = [];
        constructor(
    
    private _bookService: BookService) {}

  ngOnInit() {
    this.booklist = this._bookService.getBooks();
    
  }


 
  
 
}
