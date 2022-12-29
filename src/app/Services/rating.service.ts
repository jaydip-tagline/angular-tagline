import { Injectable } from '@angular/core';
import { Revboxval } from '../common';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor() {}
  public revboxlist: Revboxval[] = [
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
}
