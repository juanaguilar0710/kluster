import { Injectable } from '@angular/core';
import { Feature } from '../interface/basecard';
import { features } from 'src/app/data/features.data'; 

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private features: Feature[] = features;

  constructor() {}

  getAllFeatures(): Feature[] {
    return this.features;
  }

  getFeatureByName(name: string): Feature | undefined {
    return this.features.find(feature => feature.nameFeature === name);
  }
}