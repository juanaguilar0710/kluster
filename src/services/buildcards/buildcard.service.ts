import { Injectable } from '@angular/core';
import { Buildcard } from '../interface/buildcard.interface'; 
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * BuildcardService is responsible for managing the CRUD operations related to buildcards.
 */
export class BuildcardService {

  private buildsSubject: BehaviorSubject<Buildcard[]> = new BehaviorSubject<Buildcard[]>([]);
  builds$: Observable<Buildcard[]> = this.buildsSubject.asObservable();
  private nextId!: number;

  constructor() {
    this.loadBuildcards();
    this.loadNextId();
  }

  /**private method is responsible for loading buildcards from local storage when 
   * the service initializes. 
   * If buildcards exist, it emits them through the buildsSubject BehaviorSubject. */
  private loadBuildcards(): void {
    const buildStorage = environment.storage.getItem('buildcards');
    if (buildStorage) {
      this.buildsSubject.next(JSON.parse(buildStorage));
    } else {
      this.buildsSubject.next([]);
    }
  }
/**
 * 
 * @param builds This private method is used to save 
 * buildcards to local storage after making changes to them.
 */
  private saveBuildcardInStorage(builds: Buildcard[]): void {
    if (environment.storage) {
      environment.storage.setItem('buildcards', JSON.stringify(builds));
    }
  }

  /**
   * @param newBuild Allows creating a new buildcard. 
   * It generates a new ID for the buildcard, updates 
   * the buildsSubject BehaviorSubject with the new buildcard, 
   * and saves the buildcard to local storage.
   */
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

  // Updates an existing buildcard. It finds the buildcard by its ID, updates it with the new data, and updates the BehaviorSubject and local storage.
  updateBuildcard(updatedBuild: Buildcard): void {
    const currentBuilds = this.buildsSubject.value;
    const index = currentBuilds.findIndex(build => build.id === updatedBuild.id);
    if (index !== -1) {
      currentBuilds[index] = updatedBuild;
      this.buildsSubject.next([...currentBuilds]);
      this.saveBuildcardInStorage(currentBuilds);
    }
  }
  // Updates the name of an existing buildcard. It finds the buildcard by its ID, updates the name, and updates the BehaviorSubject and local storage.
  updateBuildName(id: number, newName: string): void {
    const currentBuilds = this.buildsSubject.value;
    const index = currentBuilds.findIndex(build => build.id === id);
    if (index !== -1) {
      currentBuilds[index].name = newName;
      this.buildsSubject.next([...currentBuilds]);
      this.saveBuildcardInStorage(currentBuilds);
    }
  }

  // Deletes a buildcard by its ID. It filters the buildcards to exclude the buildcard with the provided ID, updates the BehaviorSubject and local storage.
  deleteBuildcard(id: number): Observable<void> {
    const updatedBuilds = this.buildsSubject.value.filter(build => build.id !== id);
    this.buildsSubject.next(updatedBuilds);
    this.saveBuildcardInStorage(updatedBuilds);
    return of();
  }

// Filters buildcards by their status. It uses RxJS to map and filter buildcards based on the provided status and handles any errors that may occur.
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
// Filters buildcards by their name. It uses RxJS to map and filter buildcards based on the provided name and handles any errors that may occur.
  filterByName(name: string): Observable<Buildcard[]> {
    return this.builds$.pipe(map(builds =>{
      return builds.filter((build => 
        build.name.toLowerCase().includes(name.toLowerCase()) 
      ))
    })) 
  }
// Gets all stored buildcards. It uses RxJS to handle any errors that may occur when fetching buildcards
  getBuildcards(): Observable<Buildcard[]> {
    return this.builds$.pipe(
      catchError(error => {
        console.error('Error getting buildcards:', error);
        return of([]);
      })
    );
  }
  // Loads the next ID for creating new buildcards from local storage when the service initializes.
  private loadNextId(): void {
    const savedNextId = environment.storage.getItem('nextId');
    this.nextId = savedNextId ? JSON.parse(savedNextId) : 1;
  }
 // Saves the next ID for creating new buildcards to local storage after updating it.
  private saveNextId(): void {
    if (environment.storage) {
      environment.storage.setItem('nextId', JSON.stringify(this.nextId));
    }
  }


}
