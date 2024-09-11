import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonAlertCustomEvent,OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],

})

export class DetailPage {
  imageSrc: string | ArrayBuffer | undefined;

  [x: string]: any;
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}
triggerFileInput() {
throw new Error('Method not implemented.');
}
selectedImage: any;
setResult($event: IonAlertCustomEvent<OverlayEventDetail<any>>) {
throw new Error('Method not implemented.');
}

  constructor(private toastController: ToastController) {}

  public alertButtons1 = [

    {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'ตกลง',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];




  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this['imageSrc'] = e.target.result;  // เก็บ URL ของรูปภาพที่อัปโหลด
      };
      reader.readAsDataURL(file);  // อ่านไฟล์และแปลงเป็น Data URL
    }
  }

}
