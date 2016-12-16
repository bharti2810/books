import {Injectable} from '@angular/core';
import {Book} from './book.model';

@Injectable()
export class BookService{
    private bookcodes: Book[] =[
  {id:'1',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'2',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'3',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'4',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'5',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'6',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'7',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'8',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'9',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'10',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'11',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'12',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'13',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'14',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'15',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'16',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'17',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'18',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'19',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'20',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'21',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'22',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'23',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'24',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'25',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'26',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'27',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'28',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'29',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
  {id:'30',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'},
 
  ];

  getBooks(): Book[]{
      return this.bookcodes;
  }
}


