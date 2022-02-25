import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      image: '/assets/images/natours.png',
      detailText: 'This is a theme for a tourism company using pure CSS3 with creative animations. This project is from the advanced CSS course of Jonas Schmedtmann on Udemy.',
      tags: ['HTML5', 'CSS3', 'SCSS', 'JAVA SCRIPT'],
      liveCode: '',
      sourceCode: ''
    },
    {
      image: '/assets/images/nexters.png',
      detailText: 'This is a website for a real estate company called Nexter using pure CSS and SCSS.I built this theme when I took the advanced CSS course from Jonas Schmedtmann on Udemy.The goal of building this page was to master CSS Grid layout and to learn new responsive design techniques',
      tags: ['HTML5', 'CSS3', 'SCSS', 'JAVA SCRIPT'],
      liveCode: '',
      sourceCode: ''
    },
    {
      image: '/assets/images/trillo.png',
      detailText: 'I took Jonas Schmedtmann\'s Udemy course: Advanced CSS and Sass to learn advanced CSS conceptsand techniques.This is the second project in the course, the Trillo website. Flexbox was a major component tothis site.',
      tags: ['HTML5', 'CSS3', 'SCSS', 'JAVA SCRIPT'],
      liveCode: '',
      sourceCode: ''
    },
    {
      image: '/assets/images/freepcgames.png',
      detailText: 'I have created this free pc game site with HTML, SCSS and use Angular framework. I have integrated FREE TO PLAY API in this project.',
      tags: ['HTML5', 'CSS3', 'SCSS', 'ANGULAR'],
      liveCode: '',
      sourceCode: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
