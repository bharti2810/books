import { Component, ElementRef, OnInit } from '@angular/core';
import {Book} from './autocomplete.model';

@Component({
  selector: 'autocomplete',
  template: `
    <input #input type="text" class="form-control input-list" [(ngModel)]="query" (keyup)="filter($event)">
    <button class="button-list" (click)="showAll(input)">
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
    </button>

    <ul id="list-group" class="list-group group-list" *ngIf="filteredList.length > 0">
        <li *ngFor="let item of filteredList" [class.active]="item.selected" [id]="item.selected" class="list-group-item item-list" (click)="select(item)">
          {{ item.author }}
        </li>
    </ul>

    <p *ngIf="selectedItem">Selected: {{ selectedItem | json }}</p>
  `,
  host: {
    '(document:click)': 'handleClick($event)',
    '(keydown)': 'handleKeyDown($event)'
  },
})
export class AutoComplete {

  query: string = '';
  filteredList: any[] = [];
  elementRef: ElementRef;
  pos: number = -1;
  opened: boolean = false;
  selectedItem: any;
  item: Book;
  items: Book[] = [
  {id:1,title:'ncert',author:'Tata mcgraw hill',publicationYear:2002,language: 'en'},
            {id:2,title:'ncert',author:'Tata mcgraw hill',publicationYear:2003,language: 'en'},
            {id:3,title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,language: 'en'},
            {id:4,title:'ncert',author:'Tata mcgraw hill',publicationYear:2005,language: 'en'},
            {id:5,title:'ncert',author:'Tata mcgraw hill',publicationYear:2006,language: 'en'},
            {id:6,title:'ncert',author:'Tata mcgraw hill',publicationYear:2007,language: 'en'},
            {id:7,title:'ncert',author:'Tata mcgraw hill',publicationYear:2008,language: 'en'},
            {id:8,title:'ncert',author:'Tata mcgraw hill',publicationYear:2009,language: 'en'},
            {id:9,title:'ncert',author:'Tata mcgraw hill',publicationYear:2010,language: 'en'},
            {id:10,title:'ncert',author:'Tata mcgraw hill',publicationYear:2001,language: 'en'},
            {id:11,title:'ncert',author:'Tata mcgraw hill',publicationYear:2002,language: 'en'},
            {id:12,title:'ncert',author:'Tata mcgraw hill',publicationYear:2003,language: 'en'},
            {id:13,title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,language: 'en'},
            {id:14,title:'ncert',author:'Tata mcgraw hill',publicationYear:2005,language: 'en'},
            {id:15,title:'ncert',author:'Tata mcgraw hill',publicationYear:2006,language: 'en'},
            {id:16,title:'ncert',author:'Tata mcgraw hill',publicationYear:2007,language: 'en'},
            {id:17,title:'ncert',author:'Tata mcgraw hill',publicationYear:2008,language: 'en'},
            {id:18,title:'ncert',author:'Tata mcgraw hill',publicationYear:2009,language: 'en'},
            {id:19,title:'ncert',author:'Tata mcgraw hill',publicationYear:2010,language: 'en'},
            {id:20,title:'ncert',author:'Tata mcgraw hill',publicationYear:2001,language: 'en'},
            {id:21,title:'ncert',author:'Tata mcgraw hill',publicationYear:2002,language: 'en'},
            {id:22,title:'ncert',author:'Tata mcgraw hill',publicationYear:2003,language: 'en'},
            {id:23,title:'ncert',author:'Tata mcgraw hill',publicationYear:2004,language: 'en'},
            {id:24,title:'ncert',author:'Tata mcgraw hill',publicationYear:2005,language: 'en'},
            {id:25,title:'ncert',author:'Tata mcgraw hill',publicationYear:2006,language: 'en'},
            {id:26,title:'ncert',author:'Tata mcgraw hill',publicationYear:2007,language: 'en'},
            {id:27,title:'ncert',author:'Tata mcgraw hill',publicationYear:2008,language: 'en'},
            {id:28,title:'ncert',author:'Tata mcgraw hill',publicationYear:2009,language: 'en'},
            {id:29,title:'ncert',author:'Tata mcgraw hill',publicationYear:2010,language: 'en'},
            {id:30,title:'ncert',author:'Tata mcgraw hill',publicationYear:2001,language: 'en'}
  ];

  constructor(private el: ElementRef) {
    this.elementRef = el;
  }

  filterQuery() {
    this.filteredList = this.items.filter((el: Book) => {
      return el.author.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    });
  }

  filter(event: any) {

    if (this.query !== '') {
      if (this.opened) {

        if ((event.keyCode >= 48 && event.keyCode <= 57) ||
          (event.keyCode >= 65 && event.keyCode <= 90) ||
          (event.keyCode == 8)) {

          this.pos = 0;
          this.filterQuery();

        } else if (event.keyCode != 38 && event.keyCode != 40 && event.keyCode != 13) {
          this.filteredList = this.items;
        }
      } else {
        this.filterQuery();
      }
    } else {
      if (this.opened) {
        this.filteredList = this.items;
      } else {
        this.filteredList = [];
      }
    }

    for (let i = 0; i < this.filteredList.length; i++) {
      this.filteredList[i].selected = false;
    }

    if (this.selectedItem) {
      this.filteredList.map((i) => {
        if (i.id == this.selectedItem.id) {
          this.pos = this.filteredList.indexOf(i);
        }
      })
      this.selectedItem = null;
    }

    // Arrow-key Down
    if (event.keyCode == 40) {
      if (this.pos + 1 != this.filteredList.length)
        this.pos++;
    }

    // Arrow-key Up
    if (event.keyCode == 38) {
      if (this.pos > 0)
        this.pos--;
    }

    if (this.filteredList[this.pos] !== undefined)
      this.filteredList[this.pos].selected = true;

    //enter
    if (event.keyCode == 13) {
      if (this.filteredList[this.pos] !== undefined) {
        this.select(this.filteredList[this.pos]);
      }
    }

    // Handle scroll position of item
    let listGroup = document.getElementById('list-group');
    let listItem = document.getElementById('true');
    if (listItem) {
      listGroup.scrollTop = (listItem.offsetTop - 200);
    }

  }

  select(item:Book) {
    this.selectedItem = item;
    this.selectedItem.selected = true;
    this.query = item.author;
    this.filteredList = [];
    //this.opened = false;
  }

  showAll(input: any) {
    input.select();

    if (this.filteredList.length > 0) {
      this.opened = false;
      this.filteredList = [];
    } else {
      this.opened = true;
      this.filteredList = this.items;
    }
    if (this.query === '') {
      this.clearAll();
    }

    this.clearSelects();
  }

  handleKeyDown(event: any) {
    // Prevent default actions of arrows
    if (event.keyCode == 40 || event.keyCode == 38) {
      event.preventDefault();
    }
  }

  clearAll() {
    if (this.filteredList) {
      for (let i = 0; i < this.filteredList.length; i++)
        this.filteredList[i].selected = false;
    }
  }

  /** Remove selected from all items of the list **/
  clearSelects() {
    if (this.selectedItem) {
      for (let i = 0; i < this.filteredList.length; i++) {
        if (this.filteredList[i].id != this.selectedItem.id)
          this.filteredList[i].selected = false;
      }
    }
  }

  /** Handle outside click to close suggestions**/
  handleClick(event: any) {
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.filteredList = [];
      this.opened = false;
    }
  }

}