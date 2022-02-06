import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  cards:any;
  srchIdx:Number;
  dataEntered:boolean;
  cardDetails:any;
  constructor(public cList: ContentList) {}

  ngOnInit() {
    //adding data into content Array
    this.addData();
    this.cards = this.cList.contentData;
  }


  addData(){
    //adding 5 items, you can increase by changing number 6 if you wish.
    for (var i = 0; i < 6; i++)
      this.cList.addContentItem({
        id: i,
        title: 'Anjum',
        description: 'Web Developer',
        creator: 'Anjum',
        imgURL: 'https://wallpapercave.com/wp/wp6350578.jpg',
        type: 'Coder',
        tags: ['web', 'android', 'desktop', 'system'],
      });
  }
  //search content by Index
  searchCardbyIdx(idx:Number){
    //getting count of items in Content Array
    let count = this.cList.countItems();
    console.log(count);
    //if index>length of content Array show error and return
    if(idx>=count){
      alert("please enter valid index");
      this.dataEntered = false;
      this.srchIdx = null;
      return;
    }
    //if searchBox empty
    else if(!idx){
      alert("Index can't be empty");
      this.dataEntered = false;
      this.srchIdx = null;
      return;
    } 
    //fetch card details from content Array by Index
    this.cardDetails = this.cList.showDetails(idx);
    this.dataEntered = true;
  }
}
