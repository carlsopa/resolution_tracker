import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResolutionService } from 'src/app/shared/services/resolution.service';
import { ResolutionFormComponent } from '../resolution-form/resolution-form.component';

@Component({
  selector: 'app-resolution-list',
  templateUrl: './resolution-list.component.html',
  styleUrls: ['./resolution-list.component.scss']
})
export class ResolutionListComponent implements OnInit {
  ResolutionList = null
  CategoryId
  id
  title
  description

  constructor(
    private rs: ResolutionService,
    private route: ActivatedRoute,
    private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.rs.GetResolutions(this.id).subscribe(data=>{
      this.ResolutionList = data
    })
  }
   OpenNewDialog(){
    console.log(this.id)
    let dialogRef = this.dialog.open(ResolutionFormComponent,  {data: {category: this.id, title: this.title, description: this.description}})
    dialogRef.afterClosed().subscribe(result=>{
      this.rs.CreateResolution(this.id,result)
    })
  }

}