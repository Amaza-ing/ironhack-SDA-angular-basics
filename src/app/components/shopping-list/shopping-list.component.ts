import { Component } from '@angular/core';
import { ShoppingItem } from 'src/app/models/shopping-item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  shoppingList: ShoppingItem[] = [];
  itemName: string;
  itemAmount: number;

  constructor() {
    this.itemName = "";
    this.itemAmount = 0;
    this.shoppingList.push(new ShoppingItem("milk", 2));
    this.shoppingList.push(new ShoppingItem("eggs", 12));
    this.shoppingList.push(new ShoppingItem("cookies", 10));
    this.shoppingList.push(new ShoppingItem("bread", 1));
  }

  addShoppingItem() {
    const item = new ShoppingItem(this.itemName, this.itemAmount);
    this.shoppingList.push(item);
    this.itemName = "";
    this.itemAmount = 0;
  }
}
