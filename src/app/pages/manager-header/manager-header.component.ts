import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { style, animate, transition, trigger, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-manager-header',
  templateUrl: './manager-header.component.html',
  styleUrls: ['./manager-header.component.sass'],
  animations: [
    trigger(
      'headerToggler',
      [
        transition(
          ':enter', [
            style({ height: 0, opacity: 0 }),
            animate('.3s ease-out',style({ height: 48, opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            query('.manager-header-sorter', [
              style({transform: 'scaleY(1)'}),
              stagger(10, [
                animate('100ms linear', style({transform:'scaleY(0)'}))
              ])
            ]),
            style({ height: 48, opacity: 1 }),
            animate('.3s ease-in',style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ManagerHeaderComponent implements OnInit {

  @Input() settings:Object;
  expandedHeader:boolean = true;

  constructor() { }
  ngOnInit() { }

  toggleHeader() {
    this.expandedHeader = !this.expandedHeader;
  }

}
