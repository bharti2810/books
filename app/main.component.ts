import {Component, OnInit} from '@angular/core';
import {LanguageCode} from './common/langcode.model';
import {Book} from './common/book.model';
import {LangCodesService} from './common/langcodes.service';
import {HTTPTestService} from './common/http-test.service';


@Component({
    selector: 'app',
    templateUrl: './main.component.html',
    providers: [LangCodesService, HTTPTestService],
   
 })

export class MainComponent implements OnInit {
    postData: string;
    title: string = 'Booktest';
    langCodes: LanguageCode[] = [];
    years: number[] = [];
    book: Book;

    constructor( public _langCodesService: LangCodesService, public _httpService : HTTPTestService) {
    
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
        this._httpService.postJSON(this.book)
        .subscribe(
            data =>this.postData=JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }
}
