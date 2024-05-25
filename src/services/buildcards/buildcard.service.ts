import { Injectable } from '@angular/core';
import { Buildcard } from '../interface/buildcard.interface'; 
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuildcardService {

  private buildsSubject: BehaviorSubject<Buildcard[]> = new BehaviorSubject<Buildcard[]>([]);
  builds$: Observable<Buildcard[]> = this.buildsSubject.asObservable();

  constructor() {
    this.loadBuildcards();
  }

  private loadBuildcards(): void {
    const buildStorage = environment.storage.getItem('buildcards');
    if (buildStorage) {
      this.buildsSubject.next(JSON.parse(buildStorage));
    } else {
      this.buildsSubject.next([]);
    }
  }

  private saveBuildcardInStorage(builds: Buildcard[]): void {
    if (environment.storage) {
      environment.storage.setItem('buildcards', JSON.stringify(builds));
    }
  }

  createNewBuild(newBuild: Buildcard): void {
    const currentBuilds = this.buildsSubject.value;
    if (newBuild) {
      const updatedBuilds = [...currentBuilds, newBuild];
      this.buildsSubject.next(updatedBuilds);
      this.saveBuildcardInStorage(updatedBuilds);
    }
  }

  updateBuildcard(updatedBuild: Buildcard): void {
    const currentBuilds = this.buildsSubject.value;
    const index = currentBuilds.findIndex(build => build.id === updatedBuild.id);
    if (index !== -1) {
      currentBuilds[index] = updatedBuild;
      this.buildsSubject.next([...currentBuilds]);
      this.saveBuildcardInStorage(currentBuilds);
    }
  }
  updateBuildName(id: number, newName: string): void {
    const currentBuilds = this.buildsSubject.value;
    const index = currentBuilds.findIndex(build => build.id === id);
    if (index !== -1) {
      currentBuilds[index].name = newName;
      this.buildsSubject.next([...currentBuilds]);
      this.saveBuildcardInStorage(currentBuilds);
    }
  }

  deleteBuildcard(id: number): void {
    const updatedBuilds = this.buildsSubject.value.filter(build => build.id !== id);
    this.buildsSubject.next(updatedBuilds);
    this.saveBuildcardInStorage(updatedBuilds);
  }

  filterByStatus(status: number): Observable<Buildcard[]> {
    return this.builds$.pipe(
      map(builds => {
        if (status === -1) {
          return builds;
        } else {
          return builds.filter(build => build.status === status);
        }
      }),
      catchError(error => {
        console.error('Error filtering builds by status:', error);
        return of([]);
      })
    );
  }

  getBuildcards(): Observable<Buildcard[]> {
    return this.builds$.pipe(
      catchError(error => {
        console.error('Error getting buildcards:', error);
        return of([]);
      })
    );
  }
}
