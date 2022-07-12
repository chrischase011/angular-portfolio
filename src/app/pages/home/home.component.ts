import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkListenerService } from 'src/app/link-listener.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private linkService: LinkListenerService,
    private router: Router
    ) {
    this.linkService.setNavItem(
      this.linkService.navItems[this.router.url]
    );
   }

  ngOnInit(): void {
  }

}
