import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  magnitude: number;
  depth: number;

  constructor() { }

  setMagnitude(m) {
    this.magnitude = m;
  }

  setDepth(d) {
    this.depth = d;
  }
}
