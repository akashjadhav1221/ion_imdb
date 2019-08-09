import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../services/imdb.service';
import { ToastController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public searchKey: string ='';
  public type: string = 'movie';
  public results: any;
  public noResults: boolean = false;
  public called: boolean = false;
  
  constructor(
    public imdbService: ImdbService,
    public toastCtrl: ToastController) {
     
  }

  ngOnInit(): void {
  }

  search(event){

    if(this.searchKey.trim() == ''){  
      this.presentToast();
    }
    
    console.log(event);
    this.imdbService.search(this.searchKey.trim(), this.type).subscribe(res => {
      console.log(res);
      this.noResults = false;
      if(res['Search']){
        this.results = res['Search'];
        console.log(this.results);
      }else{
        this.noResults = true;
      }
    });
  }

  searchChanged(event){
    console.log(event)
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Search Key Cannot Be Empty',
      duration: 3000
    });
    toast.present();
  }

}
