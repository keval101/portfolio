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
        title: 'Secondary School',
        class: '10th',
        school: 'Noble High School, Junagadh',
        year: '2016-2017'
      },
      {
        title: 'Higher Secondary School',
        class: '12th',
        school: 'Noble High School, Junagadh',
        year: '2017-2019'
      },
      {
        title: 'Computer Science & Engineering',
        class: 'BE',
        school: 'Subhash Technical Campus, Junagadh',
        year: '2019-2022'
      },
    ]
  }

}
