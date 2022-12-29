import { Injectable } from '@angular/core';
import { Divcon2, Fulldiv1val } from '../common';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  public servicelist: Divcon2[] = [
    {
      image: '../assets/image/mobile.png',
      title: 'Application Management and Modernisation',
      description: `Here at Tagline, we provide the service of Application management and modernisation for the growth of
    your business. We update the old application with new approaches, including the latest languages,
    frameworks, and platforms.`,
      button: 'Learn More ->',
    },
    {
      image: '../assets/image/web-design-icon.webp',
      title: 'Software Product Engineering',
      description: `At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,
    Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA
    ensures the quality of the software.`,
      button: 'Learn More ->',
    },
    {
      image: '../assets/image/testing-icon.webp',
      title: 'Agile QA, Automation, and DevOps',
      description: `At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,
    Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA
    ensures the quality of the software.`,
      button: 'Learn More ->',
    },
    {
      image: '../assets/image/uiux-design-icon.webp',
      title: 'Digital Strategy & Design',
      description: `Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their
    businesses. Our developers and UI UX designers put the user first to create easy-to-navigate
    interfaces and smooth end-to-end experiences.`,
      button: 'Learn More ->',
    },
    {
      image: '../assets/image/software-development-1.png',
      title: 'Software outsourcing company',
      description: `Tagline Infotech is an experienced software outsourcing company that provides services for various
    businesses. We have a reliable team of developers that provides high-quality outsourcing services to
    scale your business.`,
      button: 'Learn More ->',
    },
  ];
}
