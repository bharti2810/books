
import {Component} from '@angular/core';
import {BookService}  from '../common/books.service';
import { AutoComplete } from '../common/autocomplete';

@Component({
    selector: 'app',
    templateUrl: 'app/appcomponent/app.component.html',
    styleUrls: ['app/common/style.css','app/appcomponent/app.component.css'],
    providers:[BookService]
 })

export class AppComponent {
   
 }