import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly API_URL = "http://localhost:8080/api/courses";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  postCourse(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL, body);
  }

  putCourse(id: string, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, body);
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
