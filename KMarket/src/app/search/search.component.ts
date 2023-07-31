import { Component } from '@angular/core';
import { AfterViewInit, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  enteredSearchValue: string = '';

  @Output()
  // searchTextChanged: <string> = new EventEmitter<string>();
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
