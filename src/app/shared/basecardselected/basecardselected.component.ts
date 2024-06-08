import { Component, Input, OnInit } from '@angular/core';
import { Basecard } from 'src/services/interface/basecard';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-basecardselected',
  templateUrl: './basecardselected.component.html',
  styleUrls: ['./basecardselected.component.css'],
})
/**
 * The BasecardselectedComponent is responsible for displaying a selected basecard and providing an option to open a modal window for detailed information.
 */
export class BasecardselectedComponent implements OnInit {
  @Input() data!: Basecard;
  basecardIsSelected: boolean = true;

  /**
   * Constructs a new instance of BasecardselectedComponent.
   * @param modalService The service for managing modal operations.
   */
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}
  /** Opens a modal window to display detailed information about the selected basecard. */
  openModal(): void {
    this.modalService.$modal.emit(true);
    this.modalService.setDataModal(this.data);
  }
}
