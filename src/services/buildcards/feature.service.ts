import { Injectable } from '@angular/core';
import { Feature } from '../interface/basecard';
import { features } from 'src/app/data/features.data'; 
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BasecardService } from './basecard.service';

@Injectable({
  providedIn: 'root'
})
/**
 * FeatureService is responsible for managing features related to base cards.
 * It provides methods for retrieving, filtering, and manipulating features.
 */
export class FeatureService {
  
  private features: Feature[] = features; // Array to store all features
  private featuresUsingList: Feature[] = []; // Array to store selected features
  private selectedFeaturesSubject: BehaviorSubject<Feature[]> = new BehaviorSubject<Feature[]>([]); // Subject for observing selected features
  selectedFeatures$: Observable<Feature[]> = this.selectedFeaturesSubject.asObservable(); // Observable for accessing selected features

  constructor(private basecardService:BasecardService) {
    this.getFeaturesOfBasecards(); // Load features associated with base cards
  }

  /**
   * Retrieves all features.
   * @returns An observable of all features.
   */
  getAllFeatures(): Observable<Feature[]> {
    return of(this.features);
  }

  /**
   * Retrieves a feature by its name.
   * @param name The name of the feature.
   * @returns An observable of the feature with the specified name, or undefined if not found.
   */
  getFeatureByName(name: string): Observable<Feature | undefined> {
    return of(this.features.find(feature => feature.name === name));
  }

  /**
   * Retrieves features by category.
   * @param category The category of features to retrieve.
   * @returns An observable of features belonging to the specified category.
   */
  getFaturesByCategory(category: String): Observable<Feature[]> {
    const filteredCards = this.features.filter(feature => feature.category === category);
    return of(filteredCards);
  }

  /**
   * Adds a feature to the list of selected features.
   * @param featureToAdd The feature to add.
   */
  addFeatureToList(featureToAdd: Feature): void {
    if (!this.isFeatureSelected(featureToAdd)) {
      this.featuresUsingList.push(featureToAdd);
      this.selectedFeaturesSubject.next([...this.featuresUsingList]);
    }
  }

  /**
   * Filters features by name or description.
   * @param query The search query.
   * @returns An observable of features matching the search query.
   */
  filterFeaturesByNameOrDescription(query: string): Observable<Feature[]> {
    const filteredFeatures = this.features.filter(feature => 
      feature.name.toLowerCase().includes(query.toLowerCase()) ||
      feature.description.toLowerCase().includes(query.toLowerCase())
    );
    return of(filteredFeatures);
  }

  /**
   * Checks if a feature is already selected.
   * @param feature The feature to check.
   * @returns True if the feature is already selected, otherwise false.
   */
  private isFeatureSelected(feature: Feature): boolean {
    return this.featuresUsingList.some(f => f.name === feature.name);
  }

  /**
   * Removes a feature from the list of selected features.
   * @param featureToRemove The feature to remove.
   */
  removeFeatureFromList(featureToRemove: Feature): void {
    const index = this.featuresUsingList.findIndex(feature => feature.name === featureToRemove.name);
    if (index !== -1) {
      this.featuresUsingList.splice(index, 1);
      this.selectedFeaturesSubject.next([...this.featuresUsingList]);
    }
  }

  /**
   * Retrieves the list of selected features.
   * @returns An observable of the list of selected features.
   */
  getFeaturesSelected(): Observable<Feature[]> {
    return of(this.featuresUsingList);
  }

  /**
   * Retrieves feature IDs.
   * @param features The list of features.
   * @returns An array of feature IDs.
   */
  getFeatureIds(features: Feature[]): number[] {
    return features.map(feature => feature.id);
  }

  /**
   * Retrieves features by their IDs.
   * @param ids The IDs of the features.
   * @returns An array of features with the specified IDs.
   */
  getFeaturesByIds(ids: number[]): Feature[] {
    return this.features.filter(feature => ids.includes(feature.id));
  }

  /**
   * Resets the list of selected features.
   */
  resetFeaturesSelected(): void {
    this.featuresUsingList = [];
    this.selectedFeaturesSubject.next([]);
  }

  /**
   * Retrieves features associated with base cards and adds them to the list of features.
   */
  private getFeaturesOfBasecards(): void {
    this.basecardService.getAllBaseCards().subscribe((basecards) => {
      basecards.forEach(basecard => {
        basecard.features.forEach((feature: Feature) => {
          if (!this.features.some(f => f.name === feature.name)) {
            this.features.push(feature);
          }
        });
      });
    }, error => {
      console.error(error);
    });
  }
}
