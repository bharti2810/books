import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";
import {AppComponent}  from './app.component';
import {RouterModule} from '@angular/router';
import {BookComponent} from '../book/book.component';
import {BookListComponent} from '../book/booklist.component';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination

@NgModule({
    imports:        [BrowserModule, FormsModule, HttpModule,Ng2PaginationModule,
    RouterModule.forRoot([
        { path :'books/add' ,  component: BookComponent }, //Displays add book form
        { path :'book/:idparam' ,  component: BookComponent }, //Displays book details but input fields are disabled
        { path:'' ,            component: BookListComponent },
         {path: 'books',       component: BookListComponent },
         {path: '*',           component: BookComponent },
    ], {useHash: true}) 
    ],
    declarations: [BookComponent, AppComponent, BookListComponent],
    bootstrap:      [AppComponent]
})

export class AppModule {

}
