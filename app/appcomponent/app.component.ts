

import {Component} from '@angular/core';
import {BookService}  from '../common/books.service';

@Component({
    selector: 'app',
    templateUrl: 'app/appcomponent/app.component.html',
      providers:[BookService]  
 })

export class AppComponent {
   
}