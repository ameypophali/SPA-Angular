import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() id :number;
  @Input() name: String;
  @Input() description: String;
  @Input() price:number;
  
  constructor() { }

  ngOnInit() {
  }

}
