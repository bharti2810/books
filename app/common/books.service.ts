import {Injectable} from '@angular/core';
import {Book} from './book.model';
import { Chapter } from './chapter.model';

@Injectable()
export class BookService{
    private books: Book[] =[
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
            {id:'30',title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,langauge: 'en'}
        ];

    private chapters: Chapter[] = [
            { id: '1', index: 0, title: 'Atoms and Molecules', successor: '2', predecessor: '', },
            { id: '2', index: 1, title: 'Atoms and Molecules', successor: '3', predecessor: '1', },
            { id: '3', index: 2, title: 'Atoms and Molecules', successor: '4', predecessor: '2', },
            { id: '4', index: 3, title: 'Atoms and Molecules', successor: '5', predecessor: '3', },
            { id: '5', index: 4, title: 'Atoms and Molecules', successor: '6', predecessor: '4', },
            { id: '6', index: 5, title: 'Atoms and Molecules', successor: '7', predecessor: '5', },
            { id: '7', index: 6, title: 'isotopes', successor: '8', predecessor: '6', },
            { id: '8', index: 7, title: 'isotopes', successor: '9', predecessor: '7', },
            { id: '9', index: 8, title: 'polymers', successor: '10', predecessor: '8', },
            { id: '10', index: 9, title: 'polymers', successor: '', predecessor: '9', }
        ];

    private bookChapters : Chapter[][] = [];


    constructor() {
        var i = 0;
        for(i = 0; i < this.books.length; i++) {
            this.bookChapters[i] = this.chapters.slice(); //slice copies the chapter array to the new 2D array bookchapters
        }
    }

    getChapters(bookId) : Chapter[] {
        var index = this.getIndexByBookId(bookId);

        return this.bookChapters[index];
    }

    getBooks() : Book[]{
      return this.books;
    }

    getIndexByBookId(id: string) : number {
        for(var i = 0; i < this.books.length; i++)
            if(this.books[i].id == id)
                return i;
         return -1;
    }

    deleteBook(book){
        let ind : number = this.getIndexByBookId(book.id);

        if (ind > -1) {
            this.books.splice(ind, 1);
            this.bookChapters.splice(ind,1);
        }
    }

    getIndexByChapterId(bookId : String, chapId: string): number {
        var chaps = this.getChapters(bookId);
        for (var i = 0; i < chaps.length; i++)
            if (chaps[i].id == chapId)
                return i;

        return -1;
    }

    deleteChapter(bookId : string, chapId : string) {
        let ind: number = this.getIndexByChapterId(bookId, chapId);

        if (ind > -1) {
            this.getChapters(bookId).splice(ind, 1);
        }
    }


    getBook(bookId):Book { //Book(from book.model.ts) class is return type of function getBook
    
        var index = this.getIndexByBookId(bookId);
        return  this.books[index];//books is an array and this means that that an element with a particular index of books array is returned.
    }


    getChapter(bookId : string, chapId: string):Chapter { //Book(from book.model.ts) class is return type of function getBook
        var index = this.getIndexByChapterId(bookId,chapId);
        return  this.getChapters(bookId)[index];//books is an array and this means that that an element with a particular index of books array is returned.
    }
}


