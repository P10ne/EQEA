import {animate, query, sequence, stagger, state, style, transition, trigger} from '@angular/animations';
import {delay} from 'rxjs/operators';

export const tabAnim = () => {
  return trigger('tabAnimTrigger', [
    state('closed', style({
      height: 0,
      opacity: 0,
      overflow: 'hidden',
      filter: 'blur(2px)'
    })),
    state('opened', style({
      height: '100%',
      opacity: 1
    })),
    transition('closed => opened', [
      query(':self', [
        sequence([
          animate('0.0001s', style({height: '100%'})),
          animate('0.1s', style({opacity: 1})),
          animate('0.1s', style({filter: 'blur(0)'}))
        ], {delay: '0.2s'})
      ])
    ]),
    transition('opened => closed', [
      query(':self', [
        sequence([
          animate('0.1s', style({filter: 'blur(2px)'})),
          animate('0.1s', style({opacity: 0})),
          animate('0.0001s', style({height: 0}))
        ])
      ])
    ])
  ]);
}

/*
export const tabAnim = () => {
  return trigger('tabAnimTrigger', [
    state('closed', style({
      height: 0,
      transform: 'scale(0.7)rotateY(180deg)',
      overflow: 'hidden',
      'backface-visibility': 'hidden',
      perspective: '1000px'
    })),
    state('opened', style({
      height: '100%',
      transform: 'rotateY(0deg)',
      overflow: 'hidden',
      'backface-visibility': 'hidden',
      perspective: '1000px'
    })),
    transition('closed => opened', [
      query(':self', [
        sequence([
          animate('0s', style({height: '100%'})),
          animate('0.5s', style({transform: 'rotateY(360deg)'})),
          animate('1.5s', style({transform: 'scale(1)'}))
        ], {delay: '1.5s'})
      ])
    ]),
    transition('opened => closed', [
      query(':self', [
        sequence([
          animate('0.5s', style({transform: 'scale(0.7)'})),
          animate('1.5s', style({transform: 'rotateY(180deg)'})),
          animate('0s', style({height: 0}))
        ])
      ])
    ])
  ]);
}


*/
