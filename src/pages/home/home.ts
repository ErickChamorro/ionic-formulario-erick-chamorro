import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public eficiencia: string;
  public amor: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  calificar(){
    if(this.eficiencia == null){
      const alert = this.alertCtrl.create({
        title: 'Un favor',
        message: 'seleccione un item primero',
        buttons: ['okey', 'y si no quiero?']
      });
      alert.present();
    }else{
      if(this.eficiencia == "malo"){
        const bloque = document.getElementById("bloque-eficiencia");
        bloque.removeAttribute("hidden");
        bloque.className = "show";
        bloque.style.backgroundColor = "crimson";
        bloque.style.color = "white";
        bloque.style.borderColor = "white";
        const estado = this.eficiencia;
        bloque.textContent = "estado de eficiencia: " + estado;
    
        const radios = document.getElementById("contenedor-formulario-uno");
        radios.setAttribute("hidden", "");
      }if(this.eficiencia == "excelente"){
        const bloque = document.getElementById("bloque-eficiencia");
        bloque.removeAttribute("hidden");
        bloque.className = "show";
        bloque.style.backgroundColor = "chartreuse";
        bloque.style.color = "green";
        bloque.style.borderColor = "green";
        const estado = this.eficiencia;
        bloque.textContent = "estado de eficiencia: " + estado;
    
        const radios = document.getElementById("contenedor-formulario-uno");
        radios.setAttribute("hidden", "");
      }if(this.eficiencia == "regular"){
        const bloque = document.getElementById("bloque-eficiencia");
        bloque.removeAttribute("hidden");
        bloque.className = "show";
        bloque.style.backgroundColor = "orange";
        bloque.style.color = "black";
        bloque.style.borderColor = "black";
        const estado = this.eficiencia;
        bloque.textContent = "estado de eficiencia: " + estado;
    
        const radios = document.getElementById("contenedor-formulario-uno");
        radios.setAttribute("hidden", "");
      }if(this.eficiencia == "bueno"){
        const bloque = document.getElementById("bloque-eficiencia");
        bloque.removeAttribute("hidden");
        bloque.className = "show";
        bloque.style.backgroundColor = "cyan";
        bloque.style.color = "white";
        bloque.style.borderColor = "white";
        const estado = this.eficiencia;
        bloque.textContent = "estado de eficiencia: " + estado;
    
        const radios = document.getElementById("contenedor-formulario-uno");
        radios.setAttribute("hidden", "");
      }
    }
  }

  retornar(){
    const bloque = document.getElementById("bloque-eficiencia");
    const radios = document.getElementById("contenedor-formulario-uno");
    bloque.setAttribute("hidden", "");
    radios.removeAttribute("hidden");
    radios.className = "show";
  }

  juzgue(){
    if(this.amor == null){
      const alert = this.alertCtrl.create({
        title: 'Un favor',
        message: 'seleccione un item primero',
        buttons: ['okey', 'y si no quiero?']
      });
      alert.present();
    }else{
      if(this.amor == "despreciado"){
        const bloque = document.getElementById("bloque-amor");
        bloque.removeAttribute("hidden");
        bloque.className = "show";
        bloque.style.backgroundColor = "crimson";
        bloque.style.color = "white";
        bloque.style.borderColor = "white";
        const estado = this.amor;
        bloque.textContent = "estado de amor: " + estado;
    
        const radios = document.getElementById("contenedor-formulario-dos");
        radios.setAttribute("hidden", "");
      }if(this.amor == "positivo"){
        const bloque = document.getElementById("bloque-amor");
        bloque.removeAttribute("hidden");
        bloque.className = "show";
        bloque.style.backgroundColor = "chartreuse";
        bloque.style.color = "green";
        bloque.style.borderColor = "green";
        const estado = this.amor;
        bloque.textContent = "estado de amor: " + estado;
    
        const radios = document.getElementById("contenedor-formulario-dos");
        radios.setAttribute("hidden", "");
      }if(this.amor == "no"){
        const bloque = document.getElementById("bloque-amor");
        bloque.removeAttribute("hidden");
        bloque.className = "show";
        bloque.style.backgroundColor = "orange";
        bloque.style.color = "black";
        bloque.style.borderColor = "black";
        const estado = this.amor;
        bloque.textContent = "estado de amor: " + estado;
    
        const radios = document.getElementById("contenedor-formulario-dos");
        radios.setAttribute("hidden", "");
      }if(this.amor == "creo"){
        const bloque = document.getElementById("bloque-amor");
        bloque.removeAttribute("hidden");
        bloque.className = "show";
        bloque.style.backgroundColor = "cyan";
        bloque.style.color = "white";
        bloque.style.borderColor = "white";
        const estado = this.amor;
        bloque.textContent = "estado de amor: " + estado;
    
        const radios = document.getElementById("contenedor-formulario-dos");
        radios.setAttribute("hidden", "");
      }
    }
  }

  retornar_amor(){
    const bloque = document.getElementById("bloque-amor");
    const radios = document.getElementById("contenedor-formulario-dos");
    bloque.setAttribute("hidden", "");
    radios.removeAttribute("hidden");
    radios.className = "show";
  }

  enviar(){
    const bloque_uno = document.getElementById("contenedor-formulario-uno");
    const bloque_dos = document.getElementById("contenedor-formulario-dos");
    if(!bloque_uno.attributes.getNamedItem("hidden") || !bloque_dos.attributes.getNamedItem("hidden")){
      const alert = this.alertCtrl.create({
        title: 'Aviso',
        message: 'le falta calificar algo...',
        buttons: ['okey','callese sapo']
      });
      alert.present();
    }else{
      const alert = this.alertCtrl.create({
        title: 'Exito',
        message: 'los datos han sido enviados',
        buttons: ['Aceptar']
      });
      alert.present();
    }
  }



}
