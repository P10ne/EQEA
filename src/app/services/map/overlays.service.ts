import {ComponentFactoryResolver, ComponentRef, Injectable, ReflectiveInjector} from '@angular/core';
import {Overlay} from 'ol';
import {OLPopupComponent} from '../../components/olpopup/olpopup.component';

@Injectable({
  providedIn: 'root'
})
export class OverlaysService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  createTimeMarkOverlay(time, vCref) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(OLPopupComponent);
    const injector = ReflectiveInjector.fromResolvedProviders([], vCref.parentInjector);
    const comp = factory.create(injector);
    comp.location.nativeElement.querySelector('.firstWave').innerText = '12:30';
    comp.location.nativeElement.querySelector('.secondWave').innerText = '12:42';
    const timeMarkOverlay = new Overlay({
      element: comp.location.nativeElement,
      autoPan: true,
      autoPanAnimation: { duration: 250 }
    });
    return timeMarkOverlay;
  }
}
