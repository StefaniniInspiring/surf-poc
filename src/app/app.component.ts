import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ConfigService } from './services/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;
  sideMenuLinks: any[];

  constructor(
    private router: Router,
    public overlayContainer: OverlayContainer,
    public config: ConfigService
  ) {
    this.navLinks = [
      {
        label: 'Ofertas',
        link: './home',
        icon: 'new_releases',
        sidemenu: true,
        index: 0
      },
      {
        label: 'Promoções',
        link: './promo',
        icon: 'local_offer',
        sidemenu: true,
        index: 1
      },
      {
        label: 'Vantagens',
        link: './vantagens',
        icon: 'flight_takeoff',
        sidemenu: true,
        index: 2,
        badge: 2
      }
    ];

    this.sideMenuLinks = [
      ...this.navLinks,
      { label: 'Privacidade', link: './privacidade', sidemenu: true }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === '.' + this.router.url)
      );
    });

    const instanceId = window.location.hostname.split('.')[0];
  
    this.config.setInstance(instanceId);
  }

  close() {
    console.log('close');
  }
}
