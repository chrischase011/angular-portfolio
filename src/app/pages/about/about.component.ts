import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from '../../link-listener.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  linkSubscription: any;
  navItem: any;
  selectedAboutList: "hobbies" | "skills";

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {

    
    this.selectedAboutList = "hobbies";
    this.navItem = [{
      name: "",
      link: "",
      icon: ""
    }]
    
    this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
      next: (newItem) => {
        this.navItem = newItem
      }
    });
    console.log(this.linkService.navItems, this.router.url);
    this.linkService.setNavItem(
      this.linkService.navItems[this.router.url]
    );

  }

  ngOnInit(): void {
  }

  changeAboutList(type: "hobbies" | "skills") :void{
    console.log(type);
    this.selectedAboutList = type;
  }

}
