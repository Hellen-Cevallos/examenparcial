import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

 

export class InicioPage implements OnInit {
  email: string = '';
  message:string =''; 

  constructor( private alertController: AlertController) { }

    isValidEmail(): boolean {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(this.email);
    }
  
    async onSubmit() {
      if (this.isValidEmail()) {
        const alert = await this.alertController.create({
          header: 'Correo Enviado',
          message: `El correo electrónico ${this.email} es válido y el mensaje fue enviado.`,
          buttons: ['OK'],
        });
  
        await alert.present();
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Por favor, ingrese un correo electrónico válido.',
          buttons: ['OK'],
        });
  
        await alert.present();
      }
    }
  

  ngOnInit() {
  }

}

