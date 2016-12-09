import {Component, OnInit} from '@angular/core';
import {LanguageCode} from './common/langcode.model';
import {LangCodesService} from './common/langcodes.service';

@Component({
    selector: 'app',
    template: require('./main.html'),
    providers: [LangCodesService]
 })

export class MainComponent implements OnInit {
  title: string = 'Booktest';
  langCodes: LanguageCode[] = [];
  years: number[] = [];

  constructor( public _langCodesService: LangCodesService) {
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
}
