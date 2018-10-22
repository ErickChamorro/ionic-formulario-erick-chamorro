import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public eficiencia:string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  calificar(){
    const alert = this.alertCtrl.create({
      title: 'Confirmacion',
      message: 'estado de eficiencia: '+ this.eficiencia,
      buttons: ['listo','okey no']
    });
    alert.present();
  }



}
