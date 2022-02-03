import { Component, Input, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() cards;


  ngOnInit() {

  }

  showData(card){
    console.log(card.id, card.title);
    
  }
}
