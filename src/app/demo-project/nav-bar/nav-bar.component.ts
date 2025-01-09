import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', '../main.scss']
})
export class NavBarComponent implements OnInit {

  showMenu: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let menuBtn = this.document.querySelector('.menu-btn');
    menuBtn?.removeEventListener('click',this.toggleMenu);
    menuBtn?.addEventListener('click', this.toggleMenu);
  }

  toggleMenu() {
    const hamburger = document.querySelector('.menu-btn__burger')
    const nav = document.querySelector('.nav')
    const menuNav = document.querySelector('.menu-nav')
    const navItems = document.querySelectorAll('.menu-nav__item')
    console.log(new Date().getTime(), this.showMenu)

    if (!this.showMenu) {
      hamburger?.classList.add('open');
      nav?.classList.add('open')
      menuNav?.classList.add('open')
      navItems?.forEach(item => item?.classList.add('open'))
      this.showMenu = true;

    }
    else {
      // console.log(hamburger?.classList)
      hamburger?.classList.remove('open');
      nav?.classList.remove('open')
      menuNav?.classList.remove('open')
      navItems?.forEach(item => item?.classList.remove('open'))
      this.showMenu = false;

    }
  }

  // hideMenu(){
  //   const hamburger = document.querySelector('.menu-btn__burger')
  //   const nav = document.querySelector('.nav')
  //   const menuNav = document.querySelector('.menu-nav')
  //   const navItems = document.querySelectorAll('.menu-nav__item')
  //    hamburger?.classList.remove('open');
  //     nav?.classList.remove('open')
  //     menuNav?.classList.remove('open')
  //     navItems?.forEach(item => item?.classList.remove('open'))
  //    this.showMenu=false;
  //    console.log(this.showMenu,'status')

  // }

  log(message: string) {
    console.log(message)
    this.showMenu=true;
    this.toggleMenu()
  }

}
