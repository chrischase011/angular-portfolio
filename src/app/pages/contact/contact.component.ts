import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from 'src/app/link-listener.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
