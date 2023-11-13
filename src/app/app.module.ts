import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { FanPageComponent } from './components/fan-page/fan-page.component';
import { FanItemComponent } from './components/fan-item/fan-item.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListComponent,
    FanPageComponent,
    FanItemComponent,
    GalleryComponent,
    CoursesComponent,
    NavbarComponent,
    GalleryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
