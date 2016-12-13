

import {Component, OnInit} from '@angular/core';
import {LanguageCode} from '../common/langcode.model';
import {Book} from '../common/book.model';
import {LangCodesService} from '../common/langcodes.service';
import {HTTPTestService} from '../common/http-test.service';

@Component({
    selector: 'book',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.componentstyle.css'],
    providers: [LangCodesService, HTTPTestService],
   
 })

export class BookComponent implements OnInit {
    postData: string;
    title: string = 'Booktest';
    langCodes: LanguageCode[] = [];
    years: number[] = [];
    book: Book = new Book();//book is a property of class BOOK(data type)

    constructor( public _langCodesService: LangCodesService, public _httpService : HTTPTestService) {//_langCodesService is an object of LangCodesService
    //constructor creates these objects but their functionality is defined in ngoninit 
    for (var i = 2016; i >= 1990; i--) {
      this.years.push(i);
    }
  }

  ngOnInit() {
    this.langCodes = this._langCodesService.getLanguageCodes();
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
}
