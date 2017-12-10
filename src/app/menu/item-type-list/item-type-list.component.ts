import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu.model';
import { MenuItemService } from '../menu.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-item-type-list',
  templateUrl: './item-type-list.component.html',
  styleUrls: ['./item-type-list.component.css']
})
export class ItemTypeListComponent implements OnInit {

  menuItemTypes: Set<string> = new Set<string>();
  constructor(private menuItemService : MenuItemService) { }

  ngOnInit() {
    this.menuItemTypes = this.menuItemService.getAllMenuTypes();
  }

}
