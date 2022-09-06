import { Component, OnInit } from '@angular/core';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  constructor(private data:PriceService) { }

  ngOnInit(): void {

      if(this.data.getDataDrinks() && this.data.getDataDrinks().length>0 )
      {
        this.obj =  this.data.getDataDrinks()
      }
  }

  obj=[
    {
      name:'Lemon Drink',cpp:50, quantity:0, totalcost:0, img:"assets/lemon_drink.jpg"
    },

    {
      name:'Hot Coffee',cpp:200, quantity:0, totalcost:0, img:"assets/hot_coffee.jpg"
    },

    {
      name:'Iced Coffee',cpp:250, quantity:0, totalcost:0, img:"assets/iced_coffee.jpg"
    },

    {
      name:'Pineapple Juice',cpp:120, quantity:0, totalcost:0, img:"assets/pineapple_juice.jpg"
    }
  ]

  add(j:number)
  {
    this.obj[j].quantity=this.obj[j].quantity+1;
    this.obj[j].totalcost=this.obj[j].quantity*this.obj[j].cpp
    this.data.setDrinks(this.obj)

  }

  Minus(j:number)
  {
    this.obj[j].quantity=this.obj[j].quantity-1;
    this.obj[j].totalcost=this.obj[j].quantity*this.obj[j].cpp
    this.data.setDrinks(this.obj)
  }

}
