import {Component, Input, OnInit} from '@angular/core';
import {ProgressBarService} from '../../services/progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  width: string;
  @Input() positionStyle;
  message: string;
  isActive: boolean;

  constructor(private progress: ProgressBarService) {
      this.progress.progressChanged$.subscribe((progressData) => {
        this.width = `${progressData.progress}%`;
        this.message = progressData.message;
        this.isActive = progressData.isActive;
      });
      this.progress.progressActiveChanged$.subscribe((isActive) => {
        this.isActive = isActive;
      });
  }

  ngOnInit() {

  }

}
