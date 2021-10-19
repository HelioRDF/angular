/**
    * @description      :
    * @author           : Keeggo
    * @group            :
    * @created          : 07/10/2021 - 23:11:50
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/10/2021
    * - Author          : Keeggo
    * - Modification    :
**/
import { CourseService } from './course.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
  course: Course = new Course;
  constructor(private activatedRoute: ActivatedRoute, private courseService:CourseService) {}


  ngOnInit(): void {
    const myid = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("--------------------------");
    console.log(myid);
    this.course =  this.courseService.retrieveById(parseInt("1"));
  }

}
