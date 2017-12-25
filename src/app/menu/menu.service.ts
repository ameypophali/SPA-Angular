import { MenuItem } from "./menu.model";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Response } from "@angular/http/src/static_response";

@Injectable()
export class MenuItemService{
    // Hardcoding because Backend SpringBoot API is down
    private menuItems : MenuItem[] = 
    [
        new MenuItem(1,'Cheese Burger', 'Bun and Patty', 12, 'Entree'),
		new MenuItem(3,'Vegetable Curry', 'Veg spicy gravy', 6, 'Entree'),
		new MenuItem(1,'Ham Burger', 'Bun with Ham and Beef Patty', 12, 'Entree'),
		new MenuItem(3,'Mac and Cheese', 'Mac and Cheese with veges on side', 19, 'Entree'),
		new MenuItem(1,'Whiskey Bacon Burger', 'Bacon burger with Bourbon Whiskey', 9, 'Entree'),
		new MenuItem(3,'Quesadilla', 'Chicken and spices baked in spices and wrapped in Torta', 6, 'Entree'),
		new MenuItem(1,'Phillys Steak Sandwich', 'Phillys steak in a sandwich', 15, 'Entree'),
		new MenuItem(3,'Pasta', 'Pasta with selected sauce', 13, 'Entree'),
		new MenuItem(1,'Salmon Sushi', 'Salmon Sushi Roll', 12, 'Entree'),
		new MenuItem(3,'Maki Roll', 'Maki Roll with selected choices', 6, 'Entree'),
		new MenuItem(1,'Cheese Burger', 'Bun and Patty', 9, 'Entree'),
		new MenuItem(3,'Steak Wrap', 'Steak wrapped in bread', 18, 'Entree'),
		new MenuItem(1,'Classic Burger', 'Classic American Burger', 11, 'Entree'),
		new MenuItem(3,'Hot Dog', 'Classic Chicago Style Hot Dog', 6, 'Entree'),
		new MenuItem(2,'French Fried', 'Freshly Fried Potato Fries', 4, 'Appetizer'),
		new MenuItem(2,'Tots', 'Potato Tots', 4, 'Appetizer'),
		new MenuItem(2,'Steamed Broccoli', 'Broccoli Steamed with Butter and spices', 6, 'Appetizer'),
		new MenuItem(2,'Salad', 'Specialty Salad', 4, 'Appetizer'),
		new MenuItem(2,'Grilled Shrimp', 'Shrimp grilled with butter and spices', 8, 'Appetizer'),
		new MenuItem(2,'Fried Fish', 'Fish Fried with Spices', 9, 'Appetizer'),
		new MenuItem(2,'Mashed Potatoes', 'Potatoes Mashed steamed with butter and cream', 7, 'Appetizer'),
		new MenuItem(2,'Chicken Wings', 'Boneless Chicken Wings with Buffalo Sauce', 4, 'Appetizer'),
		new MenuItem(2,'Ceaser Salad', 'Saled with multiple veggies', 7, 'Appetizer'),
		new MenuItem(2,'Lime Chicken', 'Chicken cooked and fried with spices and garnished with lemon', 10, 'Appetizer'),
		new MenuItem(4,'Ice Cream', 'frozen cream with maple syrup', 5, 'Dessert'),
        new MenuItem(5,'Pie', 'Pie made with The Restaurants secret recipe', 9, 'Dessert'),
		new MenuItem(4,'Chocolate Cake', 'Cake with molten chocolate center', 5, 'Dessert'),
        new MenuItem(5,'Cookie', 'Freshly baked Chocolate Cookie with chocochips', 9, 'Dessert'),
		new MenuItem(4,'Cheese Cake', 'Fresh cheese cake with refreshing flavors', 5, 'Dessert'),
        new MenuItem(5,'Apple Pie', 'Apple Pie made with The Restaurants secret recipe', 9, 'Dessert'),
		new MenuItem(4,'Brownie', 'Cake with molten chocolate on top', 5, 'Dessert'),
        new MenuItem(5,'Hot Fudge cake', 'Freshly baked Chocolate Cookie and Ice Cream', 9, 'Dessert')
    ]

    //private menuItems : MenuItem[];
    menuItemTypes: Set<string> = new Set<string>();

    constructor(private http : Http){}

    // Get Items from backend SpringBoot API
    fetchItemsFromServer(){
        return this.http.get('http://localhost:8080/menuitems')
        .map(
            (response : Response) => {
                const data = response.json();
                return data;
            }
        );
    }

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
            //console.log(item.name);
            if(item.type === type){
                menuItemsOfType.add(item);
            }
        }
        return menuItemsOfType;
    }
}