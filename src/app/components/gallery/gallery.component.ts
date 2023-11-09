import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  pictures: any[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getPictures().subscribe({
      next: (data) => {
        this.pictures = data;
        console.log(this.pictures);                
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

}
