import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css'],
})
export class GalleryDetailComponent implements OnInit {
  id: number = 0;
  picture: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.id = this.activatedRoute.snapshot.params['id'];

    this.galleryService.getPicture(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.picture = data[0];
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
}
