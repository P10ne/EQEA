import { Component, OnInit } from '@angular/core';
import {MapService} from '../../../services/map/map.service';

@Component({
  selector: 'app-builds-db-edit',
  templateUrl: './builds-db-edit.component.html',
  styleUrls: ['./builds-db-edit.component.scss'],
  providers: [MapService]
})
export class BuildsDbEditComponent implements OnInit {

  constructor(private assessmentService: MapService) { }

  ngOnInit() {
    this.assessmentService.initMap({});
  }
}
