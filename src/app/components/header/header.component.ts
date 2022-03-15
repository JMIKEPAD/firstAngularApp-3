import { Component, Input, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/services/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pathString?: string;
  isWrapperActive = false;
  constructor(private sideNavService:SideNavService) { }

  ngOnInit(): void {
    this.pathString = window.location.pathname
    if (this.pathString === "/todolist") {
      this.isWrapperActive = true;
    }
  }

  clickMenu() { 
    this.sideNavService.sendClickEvent();
  }

}
