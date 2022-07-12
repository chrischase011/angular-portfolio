import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from '../../link-listener.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {

  linkSubscription: any;
  navItem: any;
  bannerClass: string;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.bannerClass = "";
    this.navItem = this.linkService.navItems[this.router.url];
    console.log(this.navItem, this.router.url,this.linkService.navItems);
    


    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItem = newItem
        this.changeBannerClass();
      }
    });

    //this.bannerClass = String(this.navItem["link"]).replace("/","");


    this.linkService.setNavItem(
      this.linkService.navItems[this.router.url]
    );

      

  }

  ngOnInit(): void {
  }

  changeBannerClass(): void {
    if(this.router.url === "/")
      this.bannerClass = "home";
    else
      this.bannerClass = String(this.navItem["link"]).replace('/',"");
  }
}
