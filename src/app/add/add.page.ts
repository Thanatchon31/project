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
    { name: 'เลย์' ,price: 20,imageUrl: 'assets/images/layy.jpg'},
    { name: 'มาม่า' ,price: 7,imageUrl: 'assets/images/mama.jpg'},
    { name: 'เป๊บซี่' ,price: 16,imageUrl: 'assets/images/pep.jpg'},
    { name: 'โค๊ก' ,price: 16,imageUrl: 'assets/images/cock.jpg'},
    { name: 'ปลากระป๋อง' ,price: 20,imageUrl: 'assets/images/sam.jpg'},
    { name: 'กาโตะ' ,price: 10,imageUrl: 'assets/images/kato.jpg'},
    { name: 'โฟร์โมสต์' ,price: 12,imageUrl: 'assets/images/For.jpg'},
    { name: 'โซดา' ,price: 9,imageUrl: 'assets/images/soda.jpg'},
    { name: 'แลคตาซอย' ,price: 10,imageUrl: 'assets/images/lad.jpg'},
    { name: 'เบอร์ดี้กระป๋อง' ,price: 17,imageUrl: 'assets/images/body.jpg'},
    { name: 'ฟาร์มเฮ้าส์' ,price: 42,imageUrl: 'assets/images/fram1.jpg'},
    { name: 'ป๊อกกี้' ,price: 10,imageUrl: 'assets/images/pocky.jpg'},
    { name: 'นมตรามะลิ' ,price: 34,imageUrl: 'assets/images/nom.jpg'},
    { name: 'กาแฟซองเนสเขียว' ,price: 5,imageUrl: 'assets/images/kafaig.jpg'},
    { name: 'กาแฟซองเนสเเดง' ,price: 5,imageUrl: 'assets/images/kafaid.jpg'},


  ];
  gotoDetail(i:any){
    this.detail.navigateForward('/detail',
    {state :{i}})
  }
  goBack() {
    this.navCtrl.back();
  }
}
