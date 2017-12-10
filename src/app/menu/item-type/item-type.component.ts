import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.css']
})
export class ItemTypeComponent implements OnInit {
  @Input() menuItemType: String;
 
  ngOnInit() {
  }

}
