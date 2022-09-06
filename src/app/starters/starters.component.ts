import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css']
})
export class STARTERSComponent implements OnInit {


  constructor(private data:PriceService){

  }

  ngOnInit(): void {
    if(this.data.getDataStarter() && this.data.getDataStarter().length>0)
    {
       this.obj = this.data.getDataStarter();
    }
  }


  obj=[
    {
      name:'Samosa',cpp:10, quantity:0, totalcost:0, img:"assets/samosa.jpg"
    },

    {
      name:'Paneer Tikka',cpp:200, quantity:0, totalcost:0, img:"assets/paneer_tikka.jpg"
    },

    {
      name:'Paneer Pakoda',cpp:300, quantity:0, totalcost:0, img:"assets/paneer_pkoda.jpg"
    },

    {
      name:'Khandvi',cpp:250, quantity:0, totalcost:0, img:"assets/khandvi.jpeg"
    }
  ]

  add(j:number)
  {
    this.obj[j].quantity=this.obj[j].quantity+1;
    this.obj[j].totalcost=this.obj[j].quantity*this.obj[j].cpp
    

    this.data.setStarter(this.obj);
    

  }

  Minus(j:number)
  {
    this.obj[j].quantity=this.obj[j].quantity-1;
    this.obj[j].totalcost=this.obj[j].quantity*this.obj[j].cpp

    this.data.setStarter(this.obj);
    
  }

  

}
