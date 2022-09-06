import { Component, OnInit } from '@angular/core';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'app-soups',
  templateUrl: './soups.component.html',
  styleUrls: ['./soups.component.css']
})
export class SoupsComponent implements OnInit {

  constructor(private data:PriceService) { }

  ngOnInit(): void {
    if(this.data.getDataSoup() && this.data.getDataSoup().length>0)
      {
        this.obj =  this.data.getDataSoup()
      }
  }

  obj=[

    {
      name:'Tomato Soup',cpp:100, quantity:0, totalcost:0, img:"assets/tomato_soup.jpg"
    },

    {
      name:'Corn Chowder',cpp:300, quantity:0, totalcost:0, img:"assets/corn_chowder.jpg"
    },

    {
      name:'French Onion Soup',cpp:250, quantity:0, totalcost:0, img:"assets/french_onion_soup.jpg"
    },

    {
      name:'Plit Pea Soup',cpp:200, quantity:0, totalcost:0, img:"assets/plit_pea_soup.jpg"
    }

    
  ]

  add(j:number)
  {
    this.obj[j].quantity=this.obj[j].quantity+1;
    this.obj[j].totalcost=this.obj[j].quantity*this.obj[j].cpp
    this.data.setSoup(this.obj)


  }

  Minus(j:number)
  {
    this.obj[j].quantity=this.obj[j].quantity-1;
    this.obj[j].totalcost=this.obj[j].quantity*this.obj[j].cpp
    this.data.setSoup(this.obj)
  }

  

}
