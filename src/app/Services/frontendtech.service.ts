import { Injectable } from '@angular/core';
import { Backendval } from '../common';

@Injectable({
  providedIn: 'root',
})
export class FrontendtechService {
  constructor() {}
  public techFrontend: Backendval[] = [
    {
      image: '../assets/image/react-js.png',
      title: 'React Js',
    },
    {
      image: '../assets/image/angular-icon.png',
      title: 'Angular',
    },
    {
      image: '../assets/image/typescript-icon.png',
      title: 'Typescript',
    },
    {
      image: '../assets/image/vue-js.png',
      title: 'Vue Js',
    },
    {
      image: '../assets/image/meter-js.png',
      title: 'Mateor Js',
    },
    {
      image: '../assets/image/javascript-icon.png',
      title: 'Java Script',
    },
    {
      image: '../assets/image/html5.png',
      title: 'HTML 5',
    },
  ];
}
