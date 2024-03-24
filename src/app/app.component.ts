import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppChildComponent} from './app-child/app-child.component'

import { NgFor, NgIf } from '@angular/common';



interface Product {
  name: string;
  price?: number;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,AppChildComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  products: Product[] = [
    { name: "Toy", price: 2000,  },
    { name: "Shoes", price: 2500 },
    { name: "Biscuits", price: 250 },
    { name: "Juices", price: 150 },
    { name: "Mixer", price: 5000 },
  ];

  recentlyAddedProduct: string = '';
  cartCount: number = 0;

  handleAddToCart(productName: string) {
    this.recentlyAddedProduct = productName; 
    this.cartCount++;
  }
 
}
