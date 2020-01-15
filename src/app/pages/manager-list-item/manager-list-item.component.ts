import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { style, state, animate, transition, trigger } from '@angular/animations';

import { DetailsDialogComponent } from '../../shared/dialogs/details-dialog/details-dialog.component';
import { Reel } from '../../shared/model/reel';
import { columnFields, FIELDS } from '../../shared/const';
import { ReelService } from '../../shared/services/reel.service';

@Component({
  selector: 'app-manager-list-item',
  templateUrl: './manager-list-item.component.html',
  styleUrls: ['./manager-list-item.component.sass'],
  animations: [
    trigger(
      'displayAnimation',
      [
        transition(
          ':enter', [
            style({ height: 0, opacity: 0 }),
            animate('.3s ease-out', style({ height: 40, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ height: 40, opacity: 1 }),
            animate('.3s ease-in', style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ManagerListItemComponent implements OnInit {

  @Input() reel:Reel;
  @Input() selectedItem:number;
  @Input() settings;
  @Output() delReel = new EventEmitter()

  private columnFields;

  constructor(public dialog: MatDialog,public reelService:ReelService) {}

  ngOnInit() {
    this.columnFields = columnFields;
  }

  openDetailsDialog(reel:Reel): void {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      width: '500px',
      data: reel
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  addFavorite(ev:Event): void {
    this.reel.favoriteDate = this.reel.favoriteDate ? null : new Date();
    ev.stopPropagation();
  }

  deleteThisReel(reel:Reel){
    this.delReel.emit(reel)
  }
}
