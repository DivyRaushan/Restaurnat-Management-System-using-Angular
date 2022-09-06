import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component';
import { MaincourseComponent } from './maincourse/maincourse.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SaladsComponent } from './salads/salads.component';
import { SoupsComponent } from './soups/soups.component';
import { STARTERSComponent } from './starters/starters.component';

const routes: Routes = [ { path:"starters", component : STARTERSComponent },
{ path:"maincourse", component: MaincourseComponent},

{
  path:"drinks", component: DrinksComponent},

{
  path: "salads", component: SaladsComponent},
{
  path: "soups", component: SoupsComponent
},
{
  path: "", redirectTo: "/starters", pathMatch: "full" 
},
{
  path: "**", component: NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
