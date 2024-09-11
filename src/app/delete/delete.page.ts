import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage {
[x: string]: any;

  items = [ { name: 'มาม่า' ,price: 7, imageUrL:'https://th.bing.com/th/id/OIP.vnIyVjw1rWYCvmkpOzNP9gHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
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

  constructor(private alertController: AlertController) {}

  async confirmDelete(items: string) {
    const alert = await this.alertController.create({
      header: 'ยืนยันการลบ',
      message: `คุณแน่ใจหรือว่าต้องการลบ ${items}?`,
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
        },
        {
          text: 'ลบ',
          role: 'destructive',
          handler: () => {
            this.deleteItem(items);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteItem(items: string) {
    this.items = this.items.filter(i => items);
    console.log(`${items} ถูกลบเรียบร้อยแล้ว`);
  }
}
