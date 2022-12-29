import { Injectable } from '@angular/core';
import { Blogval } from '../common';

@Injectable({
  providedIn: 'root',
})
export class OurblogService {
  constructor() {}
  public bloglist: Blogval[] = [
    {
      image: '../assets/image/Python-vs-Java.png',
      styleData: 'display: flex;justify-content: space-between;',
      button1: 'Python',
      date: '15/12/22',
      title: 'Python vs Java Comparison Of',
      descrption:
        'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
      button2: 'Read More ->',
    },

    {
      image: '../assets/image/Node.js-Application.png',
      styleData: 'display: flex;justify-content: space-between;',
      button1: 'Node Js',
      date: '9/12/22',
      title: 'Best Practices for Node.js Application Development:...',
      descrption:
        'Quick Summary Want to know about node js architecture and node js architecture best',
      button2: 'Read More ->',
    },

    {
      image: '../assets/image/Kotlin-vs-Java.png',
      styleData: 'display: flex;justify-content: space-between;',
      button1: 'RoR',
      date: '9/12/22',
      title: 'JavaScript vs Ruby On Rails: What...',
      descrption:
        'Quick Summary: Ruby on Rails and JavaScript both languages are both widely popular among',
      button2: 'Read More ->',
    },
  ];
}
