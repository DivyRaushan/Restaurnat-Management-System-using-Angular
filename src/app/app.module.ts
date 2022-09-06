import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { STARTERSComponent } from './starters/starters.component';
import { DrinksComponent } from './drinks/drinks.component';
import { SoupsComponent } from './soups/soups.component';
import { SaladsComponent } from './salads/salads.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BillComponent } from './bill/bill.component';
import { FormsModule } from '@angular/forms';
import { MaincourseComponent } from './maincourse/maincourse.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    STARTERSComponent,
    DrinksComponent,
    SoupsComponent,
    SaladsComponent,
    NotfoundComponent,
    BillComponent,
    MaincourseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
