import {Component} from '@angular/core';
import {HTTPTestService} from '../../common/http-test.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ChapterService} from '../../common/chapters.service';
import {Chapter} from '../../common/chapter.model';


@Component({
    selector: 'chapter',
    templateUrl: 'app/book/chapter/chapter.component.html',
    styleUrls: ['app/common/style.css']
 })

export class ChapterComponent {
    postData: string;
    title: string = 'Booktest';
    chapter: Chapter = new Chapter();

    constructor( public _httpService : HTTPTestService, public route : ActivatedRoute, public _chapterService: ChapterService) {
   
  }


 
  onTestPost(){
            
            this._httpService.postJSON(this.chapter).subscribe(//postJSON is a method to post JSON data
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log(this.postData)//() is used for completed notification
);
            
  }
}
