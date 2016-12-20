import {Component, OnInit} from '@angular/core';
import {LanguageCode} from '../common/langcode.model';
import {Book} from '../common/book.model';
import {LangCodesService} from '../common/langcodes.service';
import {HTTPTestService} from '../common/http-test.service';
import {ActivatedRoute, Params} from '@angular/router';
import {BookService} from '../common/books.service';
import {ChapterService} from '../common/chapters.service';
import {Chapter} from '../common/chapter.model';


@Component({
    selector: 'book',
    templateUrl: 'app/book/book.component.html',
    styleUrls: ['app/common/style.css','app/book/book.componentstyle.css'],
    providers: [LangCodesService, HTTPTestService]
 })

export class BookComponent implements OnInit {
    postData: string;
    title: string = 'Booktest';
    langCodes: LanguageCode[] = [];
    years: number[] = [];
    book: Book = new Book();//book is a property of class BOOK(data type)
    chapter: Chapter = new Chapter();
    editing: boolean = true;
    isDetails: boolean = false;

    constructor( public _langCodesService: LangCodesService, 
                    public _httpService : HTTPTestService, public route : ActivatedRoute, public bookService: BookService, public _chapterService: ChapterService) {//_langCodesService is an object of LangCodesService
    //constructor creates these objects but their functionality is defined in ngoninit 
   
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params['idparam'] !== undefined) {
        var index = this.bookService.getIndexByBookId(params['idparam']);
        this.book = this.bookService.getBooks()[index];
        this.editing = false;
        this.isDetails = true;
      }
    });
    this.langCodes = this._langCodesService.getLanguageCodes();
     for (var i = 2016; i >= 1990; i--) {
      this.years.push(i);
    }
  }


  selectYear(year : number) {
    console.log("Selected year: ", year);
  }

  onTestPost(){
            
            this._httpService.postJSON(this.book).subscribe(//postJSON is a method to post JSON data
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log(this.postData)//() is used for completed notification
);
            
  }

    getStyle(){
        if(this.editing === false)
        {
          return "#e53935";
        }
        else{
          return "#31bc86";
        }
       
  }
  edit()
   {
    this.editing= !this.editing;
   }
}
