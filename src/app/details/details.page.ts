import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public information: any;
  constructor(private activatedRoute: ActivatedRoute, private imdbService: ImdbService) { }

  ngOnInit() {
    let id  = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetails(id);
  }

  getDetails(id){
    this.imdbService.getDetails(id).subscribe(res => {
      if(res){
        this.information = res;
      }
    })
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
