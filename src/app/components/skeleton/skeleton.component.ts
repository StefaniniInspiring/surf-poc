import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  @Input() height: string = "20px";
  @Input() width: string = "200px";
  @Input() top: string = "0px";
  
  constructor() { }

  ngOnInit() {
  }

}
