import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolutionService } from 'src/app/shared/services/resolution.service';

@Component({
  selector: 'app-resolution-list',
  templateUrl: './resolution-list.component.html',
  styleUrls: ['./resolution-list.component.scss']
})
export class ResolutionListComponent implements OnInit {
  ResolutionList = null
  CategoryId

  constructor(
    private rs: ResolutionService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.rs.GetResolutions(id).subscribe(data=>{
      this.ResolutionList = data
    })
  }
  

}
