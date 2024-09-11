import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '0') {
      // นำทางไปยังหน้า Home ถ้าข้อมูลถูกต้อง
      this.router.navigate(['/home']);
    } else {
      // แสดงข้อความแจ้งเตือนถ้าข้อมูลไม่ถูกต้อง
      alert('Username หรือ Password ไม่ถูกต้อง');
    }
  }
}
