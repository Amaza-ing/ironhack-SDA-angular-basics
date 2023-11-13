import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FanPageComponent } from './components/fan-page/fan-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "fans",
    component: FanPageComponent
  },
  {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "gallery/:id",
    component: GalleryDetailComponent
  },
  {
    path: "shopping",
    component: ShoppingListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
