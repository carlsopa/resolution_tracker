import { Component, OnInit } from '@angular/core';
import { ResolutionService } from 'src/app/shared/services/resolution.service';

@Component({
  selector: 'app-resolution-list',
  templateUrl: './resolution-list.component.html',
  styleUrls: ['./resolution-list.component.scss']
})
export class ResolutionListComponent implements OnInit {
  ResolutionList = null
  CategoryId

  constructor(private rs: ResolutionService) { }

  ngOnInit(): void {
    this.rs.GetResolutions().subscribe(data=>(
      this.ResolutionList = data
    ))
  }

}
