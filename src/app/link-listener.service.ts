import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkListenerService {

  activeNavItemSubject$: Subject<string>;
  navItems: any;
  constructor() {
    this.activeNavItemSubject$ = new Subject();

    this.navItems = {
      "/" :{
        name: "Home",
        link: "/",
        icon: ""
      },
      "/about" : {
        name: "About",
        link: "/about",
        icon: ""
      },
      "/contact" : {
        name: "Contact",
        link: "/contact",
        icon: ""
      }
    }

    // console.log(Object.keys(this.navItems));
    // console.log(this.navItems["TEST"].gold);
    Object.keys(this.navItems).forEach((i) => {
      console.log(i);
    });
   }

   setNavItem(newItem: any)
    {
      console.log(newItem);
      this.activeNavItemSubject$.next(newItem);
    }
}
