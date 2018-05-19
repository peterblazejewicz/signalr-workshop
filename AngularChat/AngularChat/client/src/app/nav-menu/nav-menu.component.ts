import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  private _expanded = false;

  get expanded(): boolean {
    return this._expanded;
  }
  collapse() {
    this._expanded = false;
  }

  toggle() {
    this._expanded = !this._expanded;
  }
}
