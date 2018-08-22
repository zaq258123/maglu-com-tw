import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-magnetic',
  templateUrl: './magnetic.component.html',
  styleUrls: ['./magnetic.component.scss']
})
export class MagneticComponent implements OnInit {
  data = new Date();

  constructor() { }

  ngOnInit() {
    const rellaxHeader = new Rellax('.rellax-header');

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
