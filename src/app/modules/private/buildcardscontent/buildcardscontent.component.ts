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

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes the component by setting the options visibility for each build.
   */
  ngOnInit(): void {
    this.builds.forEach(build => {
      this.optionsVisibility[build.id] = false;
    });
  }

  /**
   * Converts the status ID to a corresponding status string.
   * @param id The status ID.
   * @returns The corresponding status string.
   */
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

  /**
   * Toggles the visibility of options for a specific build.
   * @param buildId The ID of the build.
   */
  toggleOptions(buildId: number): void {
    this.optionsVisibility[buildId] = !this.optionsVisibility[buildId];
  }

  /**
   * Deletes a build and updates the component state accordingly.
   * @param buildId The ID of the build to delete.
   */
  deleteBuild(buildId: number): void {
    this.buildcardService.deleteBuildcard(buildId).subscribe(() => {
      this.builds = this.builds.filter(build => build.id !== buildId);
      delete this.optionsVisibility[buildId];
    });
  }

  /**
   * Updates the name of a build.
   * @param buildId The ID of the build to update.
   */
  updateBuildName(buildId: number): void {
    if (this.newName.trim() === '') {
      return;
    }
    this.buildcardService.updateBuildName(buildId, this.newName);
    this.editingNameId = null;
  }

  /**
   * Sets the build ID for editing the name.
   * @param buildId The ID of the build to edit.
   */
  editName(buildId: number): void {
    this.editingNameId = buildId;
    this.toggleOptions(buildId);
  }

  /**
   * Checks if a specific build is currently being edited.
   * @param buildId The ID of the build.
   * @returns True if the build is being edited, false otherwise.
   */
  isEditingName(buildId: number): boolean {
    return this.editingNameId === buildId;
  }


  /**
   * Closes the modal for editing a build name.
   */
  closeModal(): void {
    this.editingNameId = null;
  }
}
