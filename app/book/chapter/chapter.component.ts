import { Component, OnInit } from '@angular/core';
import { HTTPTestService } from '../../common/http-test.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ChapterService } from '../../common/chapters.service';
import { Chapter } from '../../common/chapter.model';
import { Router } from '@angular/router';

@Component({
  selector: 'chapter',
  templateUrl: 'app/book/chapter/chapter.component.html',
  styleUrls: ['app/common/style.css', 'app/book/chapter/chapter.component.css'],
  providers: [HTTPTestService]
})

export class ChapterComponent implements OnInit {
  postData: string;
  chapter: Chapter = new Chapter();
  editing: boolean = true;
  isDetails: boolean = false;

  constructor(public _httpService: HTTPTestService, public route: ActivatedRoute, public _chapterService: ChapterService, private router: Router) { }//_langCodesService is an object of LangCodesService
  //constructor creates these objects but their functionality is defined in ngoninit 


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['idparam'] !== undefined) {

        var index = this._chapterService.getIndexByChapterId(params['idparam']);
        this.chapter = this._chapterService.getChapters()[index];
        this.editing = false;
        this.isDetails = true;
      }
    });
  }

  postChapter() {

    this._httpService.postJSON("/chapter", this.chapter).subscribe(//postJSON is a method to post JSON data
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log(this.postData)//() is used for completed notification
    );
  }



  getStyle() {
    if (this.editing === false) {
      return "#e53935";
    }
    else {
      return "#31bc86";
    }

  }
  edit() {
    this.editing = !this.editing;
  }
}
