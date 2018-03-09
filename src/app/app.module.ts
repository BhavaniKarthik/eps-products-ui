import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//App Root
import { AppComponent } from './app.component';

//Feature Modules
import { LayoutModule } from './layout/layout.module';
import { ProductsModule } from './products/products.module';

//Routing Module
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule,
    LayoutModule, ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
