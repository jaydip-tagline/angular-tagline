import { Component } from '@angular/core';
import {
  Awardsval,
  Contactusval,
  Contentexpval,
  Firstfooterval,
  Headtextval,
  Servicesval,
  Taglinewhyheadval,
  Technologiesval,
} from './common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  starRating: number = 0;
  title = 'angular_tagline';
  HeaderData: string[] = [
    'Case Study',
    'About Us',
    'Hire Developer',
    'Technology',
    'Industry',
  ];

  ourServices: string = 'Our Services';
  ourBlogs: string = 'Our Blogs';

  Headtext: Headtextval = {
    title1: 'Software Development Company',
    title2: '& IT Consultancy',
    title3: 'Serving',
    title4: 'tart-UPs To Fortune 500',
    description1:
      'With the help of Innovation and Technology, We give you the power to',
    description2: `change the world with your
    ideas.`,
    button: 'Schedule a meeting',
    image: '../assets/image/images.png',
  };

  services: Servicesval = {
    header: 'Our Services',
    title1: 'Find the',
    title2: 'right offers',
    title3: 'for you.',
    title4: "Don't know what to choose? ",
    title5: 'Drop us a line.',
    title6: 'Contact Us',
  };

  contentexp: Contentexpval = {
    title: 'We have the experience',
    description: `We have got the experience to make your dream come true, and these stats speak for themselves: we have
  150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have
  been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of
  freelancing experience`,
    button: 'Contact Us',
  };

  imageWoman: string = '../assets/image/woman.webp';

  technologies: Technologiesval = {
    header: 'Our Technologies',
    title: 'Web',
    type1: 'Back End',
    type2: 'Front End',
  };

  menulist: string[] = [
    'Web',
    'Mobile',
    'Desktop',
    'Plateform',
    'Database / Data Storage',
    'Big Data',
    'Machine Learning',
    'DevOps',
    'Clouds',
  ];

  taglinewhyhead: Taglinewhyheadval = {
    header: 'Why Choose Tagline Infotech ?',
    title1: 'Empower ',
    title2: ' Your ',
    title3: 'Business',
    title4: ' with Dedicated Developers',
    title5: 'Talk to our Expert',
  };

  taglinewhypval: string = `We have a team of developers who use their expertise to provide complete web development,
  mobile app development,
  testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that
  you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for
  your startup or large-scale company. Our team of developers has the experience to understand the business ideas
  of the clients to provide solutions that focus on the core values of the business. Here you will find some
  benefits of hiring developers from us.`;

  reviews: string = 'Words From Our Clientele';

  headerlineval: string = `Good things come for those who work hard, and that's why our clientele appreciate our efforts. Tagline
  Infotech provides the best services to its clients, and it is reflected through our ratings and reviews
  on various platforms.`;

  headerlineval1: string = `We are a well-known IT services company on Clutch. Check out what our customers have to say about our
  services. Read their ratings, feedback, and stories about partnering with us before making your own
  decision.`;

  awards: Awardsval = {
    header1: 'Awards & ',
    header2: ' Recognitions',
  };

  awardimage: string[] = [
    '../assets/image/award-2.webp',
    '../assets/image/award-3.webp',
    '../assets/image/award-4.webp',
    '../assets/image/award-5.webp',
    '../assets/image/award-6.webp',
  ];

  contactus: Contactusval = {
    header1: 'Our Global Presence',
    header2: 'Get Your Free Quote Today',
  };

  place1: string = 'solutions@taglineinfotech.com';

  div2title: string = 'Help & Advice';

  div3title: string = 'Services';

  firstfooter: Firstfooterval = {
    header: 'Get latest from Tagline Infotech',
    title1: 'Share your email so we can send you ',
    title2: 'guides ',
    title3: ' and ',
    title4: 'industry news.',
    title5: 'You can unsubscribe at any time. Read our privacy policy.',
    title6: '2022',
    title7: ' All rights reserved by ',
    title8: 'Tagline Infotech LLP',
  };

  numbers: number[] = [1, 2, 3, 4, 5];

  div4title: string = 'Hire Developers';
}
