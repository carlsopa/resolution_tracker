import { Component, OnInit } from '@angular/core';
import { ResolutionService } from 'src/app/shared/services/resolution.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  CurrentCategory = null
  CategoryList

  constructor(private rs: ResolutionService) { }

  ngOnInit(): void {
    this.rs.GetCategory().subscribe(data=>(
      this.CategoryList = data
    ))

  }

}
