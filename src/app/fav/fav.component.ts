import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { post } from 'selenium-webdriver/http';
//import {demo} from ;

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {


 @Input() parentdata:string;
 @Output() childevent=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }

  onchange(value:string)
  {
    this.childevent.emit(value);
  }
    
}
