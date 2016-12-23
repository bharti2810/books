import { Component, OnInit } from '@angular/core';
import { HTTPTestService } from '../../common/http-test.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Chapter } from '../../common/chapter.model';
import { Router } from '@angular/router';
import {BookService} from '../../common/books.service';
import {Book} from '../../common/book.model';

@Component({
  selector: 'chapter',
  templateUrl: 'app/book/chapter/chapter.component.html',
  styleUrls: ['app/common/style.css', 'app/book/chapter/chapter.component.css'],
  providers: [HTTPTestService]
})

export class ChapterComponent implements OnInit {
  postData: string;
  chapter: Chapter = new Chapter();
  editing: boolean = true;
  isDetails: boolean = false;
  bookId: string;

  constructor(public _httpService: HTTPTestService, public route: ActivatedRoute, private router: Router, public _bookService : BookService) { }
  //_langCodesService is an object of LangCodesService
  //constructor


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.bookId = params['bookId'];

      if (params['idparam'] !== undefined) {
        var index = this._bookService.getIndexByChapterId(this.bookId, params['idparam']);
        this.chapter = this._bookService.getChapters(this.bookId)[index];
        this.editing = false;
        this.isDetails = true;
      }
    });
  }

  postChapter() {
    this._httpService.postJSON("/chapters", this.chapter).subscribe(//postJSON is a method to post JSON data
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log(this.postData)//() is used for completed notification
    );
  }

  edit() {
    this.editing = !this.editing;
  }
}
