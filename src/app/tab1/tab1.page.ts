import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  i : any

  constructor(private detail: NavController) {}
  items=[
    {
      id:1,
      name:'เลย์',
      price: 20,
      imageUrl: 'assets/images/layy.jpg'
    },
    {
      id:2,
      name:'มาม่า',
      price: 7,
    imageUrl: 'assets/images/mama.jpg'
    },
    {
      id:3,
      name:'เป๊บซี่',
      price: 16,
    imageUrl: 'assets/images/pep.jpg'
    },
    {
      id:4,
      name:'โค๊ก',
      price: 16,
    imageUrl: 'assets/images/cock.jpg'
    },
    {
      id:5,
      name:'ปลากระป๋อง',
      price: 20,
    imageUrl: 'assets/images/sam.jpg'
    },
    {
      id:6,
      name:'กาโตะ',
      price: 10,
    imageUrl: 'assets/images/kato.jpg'
    },
    {
      id:7,
      name:'โฟร์โมสต์',
      price: 12,
    imageUrl: 'assets/images/For.jpg'
    },
    {
      id:8,
      name:'โซดา',
      price: 9,
    imageUrl: 'assets/images/soda.jpg'
    },
    {
      id:9,
      name:'แลคตาซอย',
      price: 10,
    imageUrl: 'assets/images/lad.jpg'
    },
    {
      id:10,
      name:'เบอร์ดี้กระป๋อง',
      price: 17,
    imageUrl: 'assets/images/body.jpg'
    },
    {
      id:11,
      name:'ฟาร์มเฮ้าส์',
      price: 42,
    imageUrl: 'assets/images/fram1.jpg'
    },
    {
      id:12,
      name:'ป๊อกกี้',
      price: 10,
    imageUrl: 'assets/images/pocky.jpg'
    },
    {
      id:13,
      name:'นมตรามะลิ ',
      price: 34,
    imageUrl: 'assets/images/nom.jpg'
    },
    {
      id:14,
      name:'กาแฟซองเนสเขียว',
      price: 5,
    imageUrl: 'assets/images/kafaig.jpg'
    },
    {
      id:15,
      name:'กาแฟซองเนสเเดง',
      price: 5,
    imageUrl: 'assets/images/kafaid.jpg'
    },

    ]

}
