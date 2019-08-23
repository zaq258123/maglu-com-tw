import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-magnets',
  templateUrl: './magnets.component.html',
  styleUrls: ['./magnets.component.scss']
})
export class MagnetsComponent implements OnInit {
  data = new Date();

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('六磁實業有限公司 - 永久磁鐵');
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
