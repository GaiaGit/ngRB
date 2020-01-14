import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.sass']
})
export class DetailsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() { }

  setPlaceholder = function(value){
    return (!value || value.trim() === "") ? "--" : value;
  }

  save() {
      this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}
