import {EventEmitter, Injectable, Input, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  _progress: number;
  _message: string;
  progressChanged$ = new EventEmitter<object>();
  progressActiveChanged$ = new EventEmitter<boolean>();

  update({_progress = this._progress, _message = this._message}) {
    this._progress = _progress;
    this._message = _message;
    this.progressChanged$.emit({progress: this._progress, message: this._message});
  }

  start() {
    this.progressChanged$.emit({progress: 0, message: 'Выполнение...'});
    this.progressActiveChanged$.emit(true);
  }

  stop() {
    this.progressActiveChanged$.emit(false);
  }

  constructor() { }
}
