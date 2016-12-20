
import {Component} from '@angular/core';
import {BookService}  from '../common/books.service';
import {ChapterService}  from '../common/chapters.service';





@Component({
    selector: 'app',
    templateUrl: 'app/appcomponent/app.component.html',
    styleUrls: ['app/common/style.css'],
      providers:[BookService,ChapterService]  
 })

export class AppComponent {
   
}