import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from './link-listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title: string = 'portfolio';
  //user: string
 // cars: string[];
  navItems: any;
  navItemsArray: any;
  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    //this.user = "chase"

    //this.cars = ['Toyota', 'Audi', 'BMW', 'Porsche', 'Mitsubishi'];
    console.log(this.router.url);
    this.navItems = this.linkService.navItems;
    this.navItemsArray = [];
    Object.keys(this.navItems).forEach((key)=>{
      this.navItemsArray.push(this.navItems[key]);
    });
   
  }


  linkClick(link: any) {
    //console.log(link.name)
    this.router.navigate([
      link["link"]
    ])
    this.linkService.setNavItem(link);
  }
}
