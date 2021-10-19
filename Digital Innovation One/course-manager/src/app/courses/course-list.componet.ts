import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
   templateUrl: './course-list.componet.html'
})
export class CourseListComponet implements OnInit {
  _courses: Course[] = [];
  filteredCourses: Course[] = [];
  _filterBy: string = '';
  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) =>
      course.name != null ? course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 : null)

  }




}
