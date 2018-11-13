import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  @ViewChild(SidenavComponent) child: SidenavComponent;
  public shift = false;
  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.child.flag = !this.child.flag;
    this.shift = !this.shift;

  }
}
