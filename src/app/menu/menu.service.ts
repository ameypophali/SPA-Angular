import { MenuItem } from "./menu.model";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MenuItemService{
    private menuItems : MenuItem[] = 
    [
        new MenuItem(1,'Cheese Burger', 'Bun and Patty', 12, 'entree'),
        new MenuItem(2,'Omlete', 'Egg Flat', 4, 'appetizer'),
        new MenuItem(3,'Curry', 'Veg gravy', 6, 'entree'),
        new MenuItem(4,'ice cream', 'frozen cream with sugar syrup', 5, 'dessert'),
        new MenuItem(5,'dessert1', 'some description of dessert 1', 9, 'dessert'),
        new MenuItem(6,'Start2', 'some description of starter 2', 4, 'appetizer')
    ]

    //private menuItems : MenuItem[];
    menuItemTypes: Set<string> = new Set<string>();

    constructor(private http : Http){}

    // fetchItemsFromServer(){
    //     return this.http.get('http://localhost:8080/menuitems');
    // }

    getMenuItems(){
        return this.menuItems;
    }

    getAllMenuTypes(){
        for(let item of this.menuItems ){
            this.menuItemTypes.add(item.type);
        }
        return this.menuItemTypes;
    }

    getMenuItemOfType(type : String){
        let menuItemsOfType : Set<MenuItem> = new Set<MenuItem>();
        for(let item of this.menuItems){
            if(item.type === type){
                menuItemsOfType.add(item);
            }
        }
        return menuItemsOfType;
    }

}