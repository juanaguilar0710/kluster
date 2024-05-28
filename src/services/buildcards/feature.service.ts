import { Injectable } from '@angular/core';
import { Feature } from '../interface/basecard';
import { features } from 'src/app/data/features.data'; 
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  
  private features: Feature[] = features;
  private featuresUsingList: Feature[] = [];
  private selectedFeaturesSubject: BehaviorSubject<Feature[]> = new BehaviorSubject<Feature[]>([]);
  selectedFeatures$: Observable<Feature[]> = this.selectedFeaturesSubject.asObservable();


  constructor() {}

  getAllFeatures(): Observable<Feature[]> {
    return of(this.features);
  }

  getFeatureByName(name: string): Observable<Feature | undefined> {
    return of(this.features.find(feature => feature.name === name));
  }

  getFaturesByCategory(category: String): Observable<Feature[]> {
    const filteredCards = this.features.filter(feature => feature.category === category);
    return of(filteredCards);
  }

  addFeatureToList(featureToAdd: Feature): void {
    if (!this.isFeatureSelected(featureToAdd)) {
      this.featuresUsingList.push(featureToAdd);
      this.selectedFeaturesSubject.next([...this.featuresUsingList]);
    }
  }

  filterFeaturesByNameOrDescription(query: string): Observable<Feature[]> {
    const filteredFeatures = this.features.filter(feature => 
      feature.name.toLowerCase().includes(query.toLowerCase()) ||
      feature.description.toLowerCase().includes(query.toLowerCase())
    );
    return of(filteredFeatures);
  }

  private isFeatureSelected(feature: Feature): boolean {
    return this.featuresUsingList.some(f => f.name === feature.name);
  }

  removeFeatureFromList(featureToRemove: Feature): void {
    const index = this.featuresUsingList.findIndex(feature => feature.name === featureToRemove.name);
    if (index !== -1) {
      this.featuresUsingList.splice(index, 1);
      this.selectedFeaturesSubject.next([...this.featuresUsingList]);
    }
  }
}