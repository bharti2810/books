import {Injectable} from '@angular/core';
import {Book} from './book.model';

@Injectable()
export class BookService{
    private books: Book[] =[
  {id:'1',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'2',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'3',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'4',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'5',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'6',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'7',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'8',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'9',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'10',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'11',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'12',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'13',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'14',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'15',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'16',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'17',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'18',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'19',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'20',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'21',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'22',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'23',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'24',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'25',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'26',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'27',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'28',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'29',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
  {id:'30',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'english'},
 
  ];

  getBooks(): Book[]{
      return this.books;
    
  };
}


