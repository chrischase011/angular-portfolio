import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-hobbies',
  templateUrl: './about-me-hobbies.component.html',
  styleUrls: ['./about-me-hobbies.component.scss']
})
export class AboutMeHobbiesComponent implements OnInit {

  @Input() selectedList: "hobbies" | "skills"
  
  hobbies: string[];
  skills: string[];

  constructor() { 
    this.selectedList = "hobbies"

    this.hobbies = [
      "Playing with the band",
      "Playing computer games",
      "Playing console games"
    ]

    this.skills = [
      "Programming",
      "Game Development",
      "Guitar",
      "Sleep"
    ]
  }

  ngOnInit(): void {
  }

}
