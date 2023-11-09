import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private readonly API_URL = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }

  getPictures(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/photos?albumId=1`)
  }
}
