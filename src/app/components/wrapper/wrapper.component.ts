import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SideNavService } from 'src/app/services/side-nav.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @ViewChild('drawer')
  public drawer!: MatSidenav;

  clickEventSubscription!:Subscription;

  constructor(private sideNavService: SideNavService) {
  }

  ngOnInit() {
      this.clickEventSubscription = this.sideNavService.getClickEvent().subscribe(()=> {
          this.drawer.toggle();
      });
  } 
}
