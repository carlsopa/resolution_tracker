import { Component, OnInit} from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-resolution-form',
  templateUrl: './resolution-form.component.html',
  styleUrls: ['./resolution-form.component.scss']
})
export class ResolutionFormComponent implements OnInit {
  title: string
  description: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    console.log(this.data)
  }
}

  


