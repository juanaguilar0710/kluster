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
  private nextId!: number;

  constructor() {
    this.loadBuildcards();
    this.loadNextId();
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
      newBuild.id = this.nextId++;
      const updatedBuilds = [...currentBuilds, newBuild];
      this.buildsSubject.next(updatedBuilds);
      this.saveBuildcardInStorage(updatedBuilds);
      this.saveNextId();
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

  deleteBuildcard(id: number): Observable<void> {
    const updatedBuilds = this.buildsSubject.value.filter(build => build.id !== id);
    this.buildsSubject.next(updatedBuilds);
    this.saveBuildcardInStorage(updatedBuilds);
    return of();
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

  filterByName(name: string): Observable<Buildcard[]> {
    return this.builds$.pipe(map(builds =>{
      return builds.filter((build => 
        build.name.toLowerCase().includes(name.toLowerCase()) 
      ))
    })) 
  }

  getBuildcards(): Observable<Buildcard[]> {
    return this.builds$.pipe(
      catchError(error => {
        console.error('Error getting buildcards:', error);
        return of([]);
      })
    );
  }
  private loadNextId(): void {
    const savedNextId = environment.storage.getItem('nextId');
    this.nextId = savedNextId ? JSON.parse(savedNextId) : 1;
  }

  private saveNextId(): void {
    if (environment.storage) {
      environment.storage.setItem('nextId', JSON.stringify(this.nextId));
    }
  }


}
