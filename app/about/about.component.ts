import {Component, OnInit} from '@angular/core';
import {LanguageCode} from '../common/langcode.model';
import {StateService} from '../common/state.service';
import {LangCodesService} from '../common/langcodes.service';

@Component({
  selector: 'about',
  template: require('./about.component.html')
})
export class AboutComponent implements OnInit{
  title: string = 'About Page';
  body:  string = 'This is the about page body';
  message: string;
  langCodes: LanguageCode[];

  constructor(public _stateService: StateService, public _langCodesService: LangCodesService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
    this.langCodes = this._langCodesService.getLanguageCodes();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }

  select(code: LanguageCode): void {
    console.log(code.name, code.code);
  }
}
