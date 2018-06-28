import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results= 0;
  constructor(public navCtrl: NavController) {

  }
  onReset(){
    this.results = 0;
  }
  onPlus(){
   this.results +=1;
   console.log(this.results); 
  }
  onMinus(){
  this.results -=1;
  console.log(this.results);
  }
  onOrder(){
  
  }
}
