import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  starterData=[];
  soupData=[];
  drinksData=[];
  mainCourseData=[];
  totalData=[];



  constructor() { }

  setStarter(d)
  {
     this.starterData=d;
     console.log(this.starterData)
  }

  getDataStarter()
  {
   return this.starterData;
  }

  setSoup(d)
  {
     this.soupData=d;
     console.log(this.soupData)
  }

  getDataSoup()
  {
   return this.soupData;
  }

  setDrinks(d)
  {
     this.drinksData=d;
     console.log(this.drinksData)
  }

  getDataDrinks()
  {
   return this.drinksData;
  }

  setmainCourse(d)
  {
    this.mainCourseData=d;
    console.log(this.mainCourseData)
  }

  getDataMainCourse()
  {
   return this.mainCourseData;
  }

  getTotalData()
  {
     this.totalData = [...this.starterData, ...this.mainCourseData, ...this.drinksData, ...this.soupData]
     return this.totalData
  }

  getTotalCost()
  {
   let sum=0;
   if(this.totalData.length>0)
   {
      this.totalData.forEach((data=>{
        sum = sum+data.totalcost
        
      }))
   }
   return sum;
  }



 

  
  


}
