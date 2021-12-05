import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

  educationData = []
  constructor() { }

  ngOnInit(): void {
    this.educationData = [
      {
        title: 'Computer Science & Engineering',
        school: 'Subhash Technical Campus',
        location: 'Junagadh, Gujarat',
        year: '2019-2022'
      },
      {
        title: 'Higher Secondary School',
        school: 'Manash Vidhya Mandir',
        location: 'Junagadh, Gujarat',
        year: '2017-2019'
      },
      {
        title: 'Secondary School',
        school: 'Noble High School',
        location: 'Junagadh, Gujarat',
        year: '2016-2017'
      }
    ]
  }

}
