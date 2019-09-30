import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
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
        index: 2
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
  }

  close() {
    console.log('close');
  }
}
