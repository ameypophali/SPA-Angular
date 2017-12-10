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
  menuitems : Set<MenuItem> = new Set<MenuItem>();;
  itemType : String = 'entree';
  constructor(private menuItemService : MenuItemService,
              private route: ActivatedRoute) { }
  
    ngOnInit() {

      // this.menuItemService.fetchItemsFromServer()
      // .subscribe(
      //   (response) => console.log(response),
      //   (error) => console.log(error) 
      // );

      this.route.params.subscribe(
        (params:Params) => {
          this.itemType = params['type'];
          this.menuitems = this.menuItemService.getMenuItemOfType(this.itemType);
        }
      );
    }

    
}
