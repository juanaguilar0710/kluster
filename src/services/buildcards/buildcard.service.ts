import { Injectable } from '@angular/core';
import { Buildcard } from '../interface/buildcard.interface'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuildcardService {

  builds: Buildcard[] = [];

  constructor() { 
    this.getBuildcards(); // Cargar las buildcards del localStorage al iniciar el servicio
  }

  /* Crear una nueva build */
  createNewBuild(newBuild: Buildcard) {
    if (newBuild !== null && newBuild !== undefined) {
      this.builds.push(newBuild);
      this.saveBuildcardInStorage(this.builds);
    }
  }

  /* Guardar en el localStorage */
  saveBuildcardInStorage(builds: Buildcard[]) {
    if (environment.storage) {
      environment.storage.setItem('buildcards', JSON.stringify(builds));
    }
  }

  getBuildcards() {
    const buildStorage = environment.storage.getItem('buildcards');
    if (buildStorage) {
      this.builds = JSON.parse(buildStorage);
    }
  }

  updateBuildcard(updatedBuild: Buildcard) {
    const index = this.builds.findIndex(build => build.id === updatedBuild.id);
    if (index !== -1) {
      this.builds[index] = updatedBuild;
      this.saveBuildcardInStorage(this.builds);
    }
  }

  /* Borrar una build existente */
  deleteBuildcard(id: number) {
    this.builds = this.builds.filter(build => build.id !== id);
    this.saveBuildcardInStorage(this.builds);
  }

  /* Filtrar por estatus */
  filterByStatus(status: number): Buildcard[] {
    return this.builds.filter(build => build.status === status);
  }

  /* Filtrar por el nombre */
  filterByName(name: string): Buildcard[] {
    return this.builds.filter(build => build.name.includes(name));
  }
}
