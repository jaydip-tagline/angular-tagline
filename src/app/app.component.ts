import { Component, NgModule, VERSION } from '@angular/core';
import {
  Awardsval,
  Backendval,
  Blogval,
  Contactusval,
  Contentexpval,
  Divcon2,
  Divisionval,
  Firstfooterval,
  Fulldiv1val,
  Headtextval,
  Imgnumflexval,
  Placeval,
  Revboxval,
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

  // logo: string = '../assets/image/tagline.png';

  // casestudyData: string = 'Case Study';
  HeaderData: string[] = [
    'Case Study',
    'About Us',
    'Hire Developer',
    'Technology',
    'Industry',
  ];

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

  // headerData: HeadervalData = {
  //   aboutUs: 'About Us',
  //   hireDev: 'Hire Developer',
  //   technology: 'Technology',
  //   industry: 'Industry',
  // };

  contentexp: Contentexpval = {
    title: 'We have the experience',
    description: `We have got the experience to make your dream come true, and these stats speak for themselves: we have
  150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have
  been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of
  freelancing experience`,
    button: 'Contact Us',
  };

  // servicelist: Divcon2[] = [
  //   {
  //     image: '../assets/image/mobile.png',
  //     title: 'Application Management and Modernisation',
  //     description: `Here at Tagline, we provide the service of Application management and modernisation for the growth of
  //   your business. We update the old application with new approaches, including the latest languages,
  //   frameworks, and platforms.`,
  //     button: 'Learn More ->',
  //   },
  //   {
  //     image: '../assets/image/web-design-icon.webp',
  //     title: 'Software Product Engineering',
  //     description: `At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,
  //   Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA
  //   ensures the quality of the software.`,
  //     button: 'Learn More ->',
  //   },
  //   {
  //     image: '../assets/image/testing-icon.webp',
  //     title: 'Agile QA, Automation, and DevOps',
  //     description: `At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,
  //   Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA
  //   ensures the quality of the software.`,
  //     button: 'Learn More ->',
  //   },
  //   {
  //     image: '../assets/image/uiux-design-icon.webp',
  //     title: 'Digital Strategy & Design',
  //     description: `Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their
  //   businesses. Our developers and UI UX designers put the user first to create easy-to-navigate
  //   interfaces and smooth end-to-end experiences.`,
  //     button: 'Learn More ->',
  //   },
  //   {
  //     image: '../assets/image/software-development-1.png',
  //     title: 'Software outsourcing company',
  //     description: `Tagline Infotech is an experienced software outsourcing company that provides services for various
  //   businesses. We have a reliable team of developers that provides high-quality outsourcing services to
  //   scale your business.`,
  //     button: 'Learn More ->',
  //   },
  // ];

  imageWoman: string = '../assets/image/woman.webp';

  fulldiv1list: Fulldiv1val[] = [
    {
      iamge: '../assets/image/contentlogo.webp',
      title: '125+',
      description: 'Professional',
    },
    {
      iamge: '../assets/image/contentlogo2.webp',
      title: '450+',
      description: 'Completed Projects',
    },
    {
      iamge: '../assets/image/contentlogo3.webp',
      title: '150+',
      description: 'Freelance Hours',
    },
    {
      iamge: '../assets/image/contentlogo4.webp',
      title: '5+',
      description: 'Years of experience',
    },
  ];

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

  techBackend: Backendval[] = [
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

  techFrontend: Backendval[] = [
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

  imgnumflexlist: Imgnumflexval[] = [
    {
      image: '../assets/image/choose-roadmap.png',
      title1: '01',
      title2: 'Progressive Roadmap',
      description: `Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and
    major steps to reach that goal. We have a team of developers that uses progressive`,
    },

    {
      image: '../assets/image/choose-project.png',
      title1: '02',
      title2: 'Efficient Project Management',
      description: `We believe in efficient project management and our experienced developers use project management tools
    like Wrike and Zoho. Our developers use these project management tools efficiently`,
    },

    {
      image: '../assets/image/choose-flexible.svg',
      title1: '03',
      title2: 'Flexible Engagement Model',
      description: `We provide flexible engagement models so that clients can hire developers for their projects. These
    engagement models are flexible so if you aren’t satisfied with any model you can switch to another.`,
    },

    {
      image: '../assets/image/choose-cost.png',
      title1: '04',
      title2: 'Cost-Effective',
      description: `Our team of developers provides the best development services at affordable prices. We believe that
    high-quality solutions can be delivered at cost-effective prices and that’s why we provide different
    hiring`,
    },

    {
      image: '../assets/image/choose-delivery.png',
      title1: '05',
      title2: 'Consistent Delivery',
      description: `Our developers follow an agile approach to deliver the project before the deadline. We are providing
    consistent delivery of fully-featured projects as per the client’s requirements.`,
    },
  ];

  reviews: string = 'Words From Our Clientele';

  headerlineval: string = `Good things come for those who work hard, and that's why our clientele appreciate our efforts. Tagline
  Infotech provides the best services to its clients, and it is reflected through our ratings and reviews
  on various platforms.`;

  headerlineval1: string = `We are a well-known IT services company on Clutch. Check out what our customers have to say about our
  services. Read their ratings, feedback, and stories about partnering with us before making your own
  decision.`;

  revboxlist: Revboxval[] = [
    {
      number: 5,
      review: 'Everything always turns out perfectly done.',
      name: 'IT & Computer Scientist, Self-Employed',
      verify: 'Verified Review',
    },

    {
      number: 4,
      review:
        'They understand complex technical requirements, and they have a team that quickly gets up to speed.',
      name: 'Founder, Cimpro.io',
      verify: 'Verified Review',
    },

    {
      number: 3,
      review:
        '…they’re able to tackle pretty much everything you throw at them.',
      name: 'CEO, Promoprep',
      verify: 'Verified Review',
    },

    {
      number: 5,
      review:
        'When things go wrong, they were good at adapting and problem solving on the fly.',
      name: 'CEO, SupplementSnoop',
      verify: 'Verified Review',
    },

    {
      number: 3,
      review:
        'The team takes up new challenges and finishes the project on time.',
      name: 'Software Architect, Specialty Finance Company',
      verify: 'Verified Review',
    },

    {
      number: 4,
      review:
        "We are getting close to launch now and it's been a tremendous help to have their developers on my team.",
      name: 'Owner, e-Commerce Support Company',
      verify: 'Verified Review',
    },
  ];

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

  bloglist: Blogval[] = [
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

  contactus: Contactusval = {
    header1: 'Our Global Presence',
    header2: 'Get Your Free Quote Today',
  };

  placelist: Placeval[] = [
    {
      country: 'India (HQ)',
      address: `Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat,
    Gujarat 394101`,
      number: '+91 9913 808 285',
    },
    {
      country: 'U.S.A',
      address: `2885 Old Zion, Cemetery Rd, Loganville, Ga 30052`,
      number: '+1 (404) 483-3388',
    },
    {
      country: 'United Kingdom',
      address: `65 Byron road North wembley Middlesex, london HA0 3PB`,
      number: '+44 78240 75400',
    },
  ];

  place1: string = 'solutions@taglineinfotech.com';

  divisionlist: Divisionval[] = [
    {
      title: 'HR Inquiry',
      website: 'hr@taglineinfotech.com',
      number: '+91 6354362521',
    },
    {
      title: 'Sales Inquiry',
      website: 'solutions@taglineinfotech.com',
      number: 'Tagline infotech',
    },
  ];

  div2title: string = 'Help & Advice';
  division2list: string[] = [
    'Career',
    'About Us',
    'Contact Us',
    'Blog',
    'Privacy pilicy',
    'Sitemap',
  ];

  div3title: string = 'Services';
  division3list: string[] = [
    'Mobile',
    'web Development',
    'Web Design',
    'UI / UX Design',
    'Digital Marketing',
  ];

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
  division4list: string[] = [
    'Hire Python Developer',
    'Hire Angular Developer',
    'Hire ROR Developer',
    'Hire Flutter Developer',
    'Hire React Js Developer',
    'Hire React Native Developer',
  ];
}
