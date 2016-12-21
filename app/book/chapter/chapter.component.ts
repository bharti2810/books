import {Component, OnInit} from '@angular/core';
import {HTTPTestService} from '../../common/http-test.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ChapterService} from '../../common/chapters.service';
import {Chapter} from '../../common/chapter.model';


@Component({
    selector: 'chapter',
    templateUrl: 'app/book/chapter/chapter.component.html',
    styleUrls: ['app/common/style.css','app/book/chapter/chapter.component.css'],
    providers: [HTTPTestService]
 })

export class ChapterComponent {
    postData: string;
    title: string = 'Booktest';
    chapCodes: Chapter[] = [];
    chapter: Chapter = new Chapter();
    editing: boolean = true;
    isDetails: boolean = false;

    constructor(public _httpService : HTTPTestService, public route : ActivatedRoute, public _chapterService: ChapterService) {//_langCodesService is an object of LangCodesService
    //constructor creates these objects but their functionality is defined in ngoninit 
   
  }

  
  
    
  


  postChapter(){
            
            this._httpService.postJSON("chapter/add",this.chapter).subscribe(//postJSON is a method to post JSON data
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
