import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contents$: Observable<any>;
  //dummy array to make many skeletons
  spookySkeletons = new Array(3);

  constructor(
    public contents: ContentService
  ) { }
    
  ngOnInit() {
    this.contents$ = this.contents.observeContent('home');
  }

  like(offer) {
    offer.likes += 1;
    this.contents.update(`home/${offer.id}`, offer);
  }

}
