import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Reel } from '../../shared/model/reel';
import { ReelService } from '../../shared/services/reel.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass']
})
export class ManagerComponent implements OnInit {

  data:Reel[];

  settings = {
    sort: { order: 'name', reverse: false},
    favorites: false,
    filter: 'my'
  };

  constructor(private reelService:ReelService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.reelService.getReels()
      .subscribe(response => {
        this.data = response;
        console.log(this.data)
      }, error => console.log(error)
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
