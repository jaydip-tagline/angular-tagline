import { Injectable } from '@angular/core';
import { Backendval } from '../common';

@Injectable({
  providedIn: 'root',
})
export class BackendtechService {
  constructor() {}
  public techBackend: Backendval[] = [
    {
      image: '../assets/image/ror.png',
      title: 'Ruby on Rails',
    },
    {
      image: '../assets/image/python.png',
      title: 'Python',
    },
    {
      image: '../assets/image/node_js.svg',
      title: 'Node js',
    },
    {
      image: '../assets/image/php.png',
      title: 'PHP',
    },
    {
      image: '../assets/image/android-java.png',
      title: 'Java',
    },
    {
      image: '../assets/image/go.png',
      title: 'Go Language',
    },
  ];
}
