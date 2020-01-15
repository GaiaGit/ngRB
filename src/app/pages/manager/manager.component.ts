import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { style, animate, transition, trigger, query, stagger } from '@angular/animations';

import { Reel } from '../../shared/model/reel';
import { ReelService } from '../../shared/services/reel.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass'],
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
export class ManagerComponent implements OnInit {

  data:Observable<Reel[]>;
  screenSize:number = window.innerWidth;
  expandedHeader:boolean = true;

  settings = {
    sort: { order: 'name', reverse: false},
    favorites: false,
    filter: 'my'
  };

  constructor(private reelService:ReelService) { }

  @HostListener('window:resize',['$event'])
  onResize(event){
    this.screenSize = event.target.innerWidth;
    //this.smScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit() {
    this.loadData();
  }

  toggleHeader(event) {
    this.expandedHeader = !this.expandedHeader;
  }

  loadData() {

    this.data = this.reelService.getReels()
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    )
  }
  
  deleteReel(reel:Reel) {
    console.log(this)
    this.reelService.delReel(reel.id)
      .subscribe(response => {
        //this.loadData(); // Refresh content
        //this.data.splice(index,1)
        this.loadData();
      }, error => console.log(error)
    )
  }

}
