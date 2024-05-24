import { Injectable } from '@angular/core';
import { Buildcard } from '../interface/buildcard.interface'; 
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildcardService {

  builds: Buildcard[] = [];

  constructor() { 
    this.getBuildcards(); 
  }

  createNewBuild(newBuild: Buildcard) {

    if (newBuild !== null && newBuild !== undefined) {
      this.builds.push(newBuild);
      this.saveBuildcardInStorage(this.builds);
    }
  }

  saveBuildcardInStorage(builds: Buildcard[]) {
    if (environment.storage) {
      environment.storage.setItem('buildcards', JSON.stringify(builds));
    }
  }

  getBuildcards() :Observable<any>{
    const buildStorage = environment.storage.getItem('buildcards');
  
    
    if (buildStorage) {    
      this.builds = JSON.parse(buildStorage);   } else {    
      this.builds = []; 
       }      
     return of(this.builds);
  }

  updateBuildcard(updatedBuild: Buildcard) {
    const index = this.builds.findIndex(build => build.id === updatedBuild.id);
    if (index !== -1) {
      this.builds[index] = updatedBuild;
      this.saveBuildcardInStorage(this.builds);
    }
  }

 
  deleteBuildcard(id: number) {
    this.builds = this.builds.filter(build => build.id !== id);
    this.saveBuildcardInStorage(this.builds);
  }

  
  filterByStatus(status: number): Buildcard[] {
    return this.builds.filter(build => build.status === status);
  }

  filterByName(name: string): Buildcard[] {
    return this.builds.filter(build => build.name.includes(name));
  }
}
