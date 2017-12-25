import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu.model';
import { MenuItemService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit {
  menuitems : Set<MenuItem> = new Set<MenuItem>();
  //menuitems : MenuItem[];
  var :string;
  itemType : String;
  constructor(private menuItemService : MenuItemService,
              private route: ActivatedRoute) { }
  
    ngOnInit() {
      // this.menuItemService.fetchItemsFromServer()
      // .subscribe(
      //   (items : MenuItem[]) => {
      //       console.log(items);
      //       this.menuitems = items;
      //   },
      //   error => error 
      // );

      this.route.params.subscribe(
        (params:Params) => {
          this.itemType = params['type'];
          this.menuitems = this.menuItemService.getMenuItemOfType(this.itemType);
        }
      );
    }

    
}
