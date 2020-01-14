import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BreakpointObserver, BreakpointState, MediaMatcher, Breakpoints } from '@angular/cdk/layout';
import { MatMenuTrigger } from '@angular/material';
import { style, state, animate, transition, trigger } from '@angular/animations';

import { SCREENSIZE } from '../../shared/const';

@Component({
  selector: 'app-manager-sorter',
  templateUrl: './manager-sorter.component.html',
  styleUrls: ['./manager-sorter.component.sass']
})
export class ManagerSorterComponent implements OnInit {

  @ViewChild(MatMenuTrigger, {static:false}) matMenuTrigger: MatMenuTrigger;
  @Input() settings;
  matcher: MediaQueryList;
  private isSmallScreen:boolean;

  private mediaQuery;
  breakpoint;

  constructor(public breakpointObserver: BreakpointObserver, mediaMatcher: MediaMatcher) {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    //this.matcher = mediaMatcher.matchMedia('(max-width: 300px)');
    //console.log(mediaMatcher.matchMedia('(max-width: 300px)'))
    //this.matcher.addListener(this.checkScreen)
  }
  ngOnInit() {
    this.mediaQuery = SCREENSIZE;
    //this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    //this.matcher = mediaMatcher.matchMedia('(max-width: 300px)');
    // console.log(this.isSmallScreen)
    this.breakpointObserver
      .observe(this.mediaQuery)
      .subscribe((state: BreakpointState) => {
        // if (this.breakpointObserver.isMatched('(min-width:480px)')) {
        //   console.log('Viewport is 500px or over!');
        // } else {
        //   console.log('Viewport is getting smaller!');
        // }
      });
  }

  setOrder(sortby,reverse){
    if(this.settings.sort.order === sortby)
      this.settings.sort.reverse = !this.settings.sort.reverse;
    else {
      this.settings.sort.order = sortby;
      this.settings.sort.reverse = reverse;
    }
  }

  checkScreen(event){
    console.log(event.matches)
    this.isSmallScreen = event.matches ? true : false
  }

  filterFavorite(){
    this.settings.favorites = !this.settings.favorites;
  }

  openSortMenu() {
    this.matMenuTrigger.openMenu();
  }
  closeSortMenu() {
    this.matMenuTrigger.closeMenu();
  }

}
