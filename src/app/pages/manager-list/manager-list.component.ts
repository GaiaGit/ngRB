import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Reel } from '../../shared/model/reel';
import { ReelService } from '../../shared/services/reel.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.sass']
})
export class ManagerListComponent implements OnInit {

  @Input() data:Observable<Reel[]>;
  @Input() settings:Object;

  selectedItem:number;

  constructor(private reelService:ReelService) { }
  ngOnInit() { }

  selectItem(id): void {
    this.selectedItem = id;
  }

  deleteReel(reel){
 /*    this.reelService.delReel(reel.id)
      .subscribe(response => {
        this.data = this.data.filter( i => i !== reel)
      }, error => console.log(error)
    ) */
  }

}
