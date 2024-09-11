import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {


  i : any
  navCtrl: any;

  constructor(private detail: NavController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  items = [
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},
    { name: 'ชื่อสินค้า' ,price: 0,},

  ];
  gotoDetail(i:any){
    this.detail.navigateForward('/detail',
    {state :{i}})
  }
  goBack() {
    this.navCtrl.back();
  }
}
