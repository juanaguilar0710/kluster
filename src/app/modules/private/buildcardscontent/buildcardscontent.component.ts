import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BuildcardService } from 'src/services/buildcards/buildcard.service';
import { Buildcard } from 'src/services/interface/buildcard.interface';

@Component({
  selector: 'app-buildcardscontent',
  templateUrl: './buildcardscontent.component.html',
  styleUrls: ['./buildcardscontent.component.css']
})
export class BuildcardscontentComponent implements OnInit {

  @Input() builds: Buildcard[] = [];
  newName: string = '';
  optionsVisibility: { [id: number]: boolean } = {}; 
  editingNameId: number | null = null;

  constructor(private buildcardService: BuildcardService) { }

  ngOnInit(): void {
    this.builds.forEach(build => {
      this.optionsVisibility[build.id] = false;
    });
  }

  toStringStatus(id: number): string {
    switch (id) {
      case 0: return 'Draft';
      case 1: return 'Ready';
      case 2: return 'Paid';
      case 3: return 'Running';
      case 4: return 'Complete';
      default: return 'Draft';
    }
  }

  toggleOptions(buildId: number): void {
    this.optionsVisibility[buildId] = !this.optionsVisibility[buildId];
  }

  deleteBuild(buildId: number): void {
    this.buildcardService.deleteBuildcard(buildId);
    this.toggleOptions(buildId);
  }

  updateBuildName(buildId: number): void {
    if (this.newName.trim() === '') {
      return;
    }
    this.buildcardService.updateBuildName(buildId, this.newName);
    this.editingNameId = null;
  }

  editName(buildId: number): void {
    this.editingNameId = buildId;
    this.toggleOptions(buildId);
  }

  isEditingName(buildId: number): boolean {
    return this.editingNameId === buildId;
  }

  closeModal(): void {
    this.editingNameId = null;
  }
}
