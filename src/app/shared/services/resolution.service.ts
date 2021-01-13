import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

  constructor(private fs: AngularFirestore) { }
  GetCategory(){
    return this.fs.collection('resolution_categories').snapshotChanges();
  }
  AddCategory(){
    console.log('add a new category')
  }
  DeleteCategory(){
    console.log('deleted a category')
  }
  GetResolutions(id){
    return this.fs.collection('resolution', ref=> ref.where('category','==',id)).snapshotChanges();
  }
  CreateResolution(id,ResolutionData){
    this.fs.collection('resolution', ref=> ref.where('category','==',id)).add(ResolutionData)
  }
  DeleteResolution(){
    console.log('Delete Resolution')
  }
}
