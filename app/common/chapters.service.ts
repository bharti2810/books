import {Injectable} from '@angular/core';
import {Chapter} from './chapter.model';

@Injectable()
export class ChapterService{
    private chapcodes: Chapter[] =[
          {id:'1',index:0,title:'Atoms and Molecules',successor:'isotopes',predecessor:'polymers',},
          {id:'2',index:1,title:'Atoms and Molecules',successor:'isotopes',predecessor:'polymers',},
          {id:'3',index:2,title:'Atoms and Molecules',successor:'isotopes',predecessor:'polymers',},
          {id:'4',index:3,title:'Atoms and Molecules',successor:'isotopes',predecessor:'polymers',},
          {id:'5',index:4,title:'Atoms and Molecules',successor:'isotopes',predecessor:'polymers',},
          {id:'6',index:5,title:'Atoms and Molecules',successor:'isotopes',predecessor:'polymers',},
          {id:'7',index:6,title:'isotopes',successor:'isotopes',predecessor:'polymers',},
          {id:'8',index:7,title:'isotopes',successor:'isotopes',predecessor:'polymers',},
          {id:'9',index:8,title:'polymers',successor:'isotopes',predecessor:'polymers',},
          {id:'10',index:9,title:'polymers',successor:'isotopes',predecessor:'polymers',},
    ];

    getChapters(): Chapter[]{
      return this.chapcodes;
    }
}
