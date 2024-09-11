import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Tab1Page } from '../tab1/tab1.page';
import { Navigation } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private location: Location) {}

  // ฟังก์ชันสำหรับนำทางไปหน้าถัดไป
  goToNextPage() {
    this.router.navigate(['/add']);
      // นำทางไปยัง Tab 2
  }
delet(){
  this.router.navigate(['/delete']);
}

goBack(): void {
  this.router.navigate(['/tab1']);
}
}
