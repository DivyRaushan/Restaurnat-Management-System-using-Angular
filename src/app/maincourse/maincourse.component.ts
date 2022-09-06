import { Component, OnInit } from '@angular/core';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.component.html',
  styleUrls: ['./maincourse.component.css']
})
export class MaincourseComponent implements OnInit {

  constructor(private data:PriceService) { }

  ngOnInit(): void {

    if(this.data.getDataMainCourse() && this.data.getDataMainCourse().length>0)
    {
      this.obj=this.data.getDataMainCourse()
    }
  }

  obj=[
    {
      name:'Paneer Pasanda',cpp:180, quantity:0, totalcost:0, img:"assets/paneer_pasanda.jpg"
    },

    {
      name:'Veg Kofta',cpp:130, quantity:0, totalcost:0, img:"assets/veg_kofta.png"
    },

    {
      name:'Dal Makhani',cpp:160, quantity:0, totalcost:0, img:"assets/dal_makahani.jpg"
    },

    {
      name:'Shahi Paneer',cpp:220, quantity:0, totalcost:0, img:"assets/shahi_paneer.jpg"
    }
  ]

  add(j:number)
  {
    this.obj[j].quantity=this.obj[j].quantity+1;
    this.obj[j].totalcost=this.obj[j].quantity*this.obj[j].cpp
    this.data.setmainCourse(this.obj)

  }

  Minus(j:number)
  {
    this.obj[j].quantity=this.obj[j].quantity-1;
    this.obj[j].totalcost=this.obj[j].quantity*this.obj[j].cpp
    this.data.setmainCourse(this.obj)
  }


}
