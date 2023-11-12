import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: any[] = [];
  courseName: string = "";

  constructor(private courseService: CourseService) {}

  getCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        console.log(data);
        this.courses = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  postCourse(): void {
    const body = {
      course: this.courseName,
      hours: 130,
      classroom: 'A1',
      vacations: '3 weeks',
      teacher: {
        id: 1,
      },
    };

    this.courseService.postCourse(body).subscribe({
      next: (data) => {
        alert("Course posted successfully");
        this.getCourses();
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

  putCourse(): void {
    const body = {
      course: this.courseName,
      hours: 50,
      classroom: 'A1',
      vacations: '3 weeks',
      teacher: {
        id: 1,
      },
    };

    this.courseService.putCourse(this.courseName, body).subscribe({
      next: (data) => {
        alert("Course modified successfully");
        this.getCourses();
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

  deleteCourse(): void {
    this.courseService.deleteCourse(this.courseName).subscribe({
      next: (data) => {
        alert("Course deleted successfully");
        this.getCourses();
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
}
