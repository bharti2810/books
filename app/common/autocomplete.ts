import { Component, Input, Output, ElementRef, OnInit,EventEmitter } from '@angular/core';
import {BookService} from './books.service';
import {CompleterService} from '../common/completer.service';


@Component({
  selector: 'autocomplete',
  template: `
    <input #input type="text" class="form-inp" [(ngModel)]="inputModel" [readOnly]="disabled" (keyup)="filter($event)">
    <!--<button class="button-list" (click)="showAll(input)">
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
    </button>--->

    <ul id="list-group" class="list-group group-list" *ngIf="filteredList.length > 0">
        <li *ngFor="let item of filteredList" [class.active]="item.selected" [id]="item.selected" class="list-group-item item-list" (click)="select(item)">
          {{ extractValue(item, searchField) }}
        </li>
    </ul>

    <!--<p *ngIf="selectedItem">Selected: {{ selectedItem | json }}</p>-->
  `,
    styleUrls: ['app/common/style.css', 'app/book/book.componentstyle.css'],
  host: {
    '(document:click)': 'handleClick($event)',
    '(keydown)': 'handleKeyDown($event)'
  },
})

export class AutoComplete implements OnInit{
  @Input('dataService') public dataService: CompleterService;
  filteredList: any[] = [];
  elementRef: ElementRef;
  pos: number = -1;
  opened: boolean = false;
  selectedItem: any;
  item: any;
  items: any[];
  searchField: any;

  @Input() public inputModel: String;
  @Input() public disabled: boolean;
  @Output() public inputModelChange: EventEmitter<String> = new EventEmitter();


  constructor(private el: ElementRef) {
    this.elementRef = el;
  }

  ngOnInit(){
    this.items = this.dataService.getData();
    this.searchField = this.dataService.getSearchField();
  }

  filterQuery() {
    this.filteredList = this.items.filter((el: any) => {
      return this.extractValue(el, this.searchField).toLowerCase().indexOf(this.inputModel.toLowerCase()) > -1;
    });
  }

  extractValue(obj: any, key: string) {
      let keys: string[];
      let result: any;
      if (key) {
          keys = key.split(".");
          result = obj;
          for (let i = 0; i < keys.length; i++) {
              if (result) {
                  result = result[keys[i]];
              }
          }
      }
      else {
          result = obj;
      }
      return result;
  }

  filter(event: any) {

    if (this.inputModel !== '') {
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

  select(item: any) {
    this.selectedItem = item;
    this.selectedItem.selected = true;
    this.onChange(this.extractValue(item, this.searchField));
    this.filteredList = [];
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
    if (this.inputModel === '') {
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

  onChange(value) {
    this.inputModel = value;
    this.inputModelChange.emit(this.inputModel);
  }
}