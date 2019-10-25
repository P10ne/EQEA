import {EventEmitter, Injectable, Input, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  _progress: number;
  _message: string;
  _isActive = false;
  progressChanged$ = new EventEmitter<object>();
  update({_progress = this._progress, _message = this._message, _isActive = this._isActive}) {
    this._progress = _progress;
    this._message = _message;
    this._isActive = _isActive;
    this.progressChanged$.emit({progress: this._progress, message: this._message, isActive: this._isActive});
  }

  constructor() { }
}
