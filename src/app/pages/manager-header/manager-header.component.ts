import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manager-header',
  templateUrl: './manager-header.component.html',
  styleUrls: ['./manager-header.component.sass']
})
export class ManagerHeaderComponent implements OnInit {

  @Output() toggleHeader = new EventEmitter<void>();
  @Input() expandedHeader:boolean;
  @Input() settings:Object;
  @Input() screenSize:number;
  smScreen:number = 600;
  searchText:string;

  constructor(public breakpointObserver: BreakpointObserver, mediaMatcher: MediaMatcher) { }

  ngOnInit() { }

  handleHeaderToggler(){
    this.toggleHeader.emit();
  }

}
