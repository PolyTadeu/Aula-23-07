import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 /**  constructor() {}**/
  titulo="Polyana";

   constructor (public alertController:AlertController,public toastController:ToastController ){}
    async alerta(){
    const alert= await this.alertController.create(
      { header:'Irado!',
        message:'Gastaria de avaliar o filme?',
        buttons:['NÃO', 'SIM']

      }
    );

    await alert.present();
    
  }
  async Toast(){
    const toast= await this.toastController.create(
      {
        message:'Filme adicionado na sua lista! :)',
        duration:2000

      }
    );

    toast.present();
    
  }


}


