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

  constructor(
    public contents: ContentService
  ) { }
    
  ngOnInit() {
    this.contents$ = this.contents.observeContent('home');
  }

}
