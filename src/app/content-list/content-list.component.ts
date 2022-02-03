import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content =[{
    id: 1,
    title: "Anjum",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    type: "Developer",
    tags: ["Web"]
  },
  {
    id: 2,
    title: "Anjum",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    type: "Developer",
    tags: ["Android"]
  },
  {
    id: 3,
    title: "Anjum",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    type: "Developer",
    tags: ["Desktop"]
  },
  {
    id: 4,
    title: "Anjum",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    type: "Developer",
    tags: ["IOS"]
  }, 
  {
    id: 5,
    title: "Anjum",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    type: "Developer",
    tags: ["Xamarin"]
  }, 
  {
    id: 6,
    title: "Anjum",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    type: "Developer",
    tags: ["Services"]
  }, 
  {
    id: 6,
    title: "Anjum",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    type: "Developer",
    tags: ["MacBook"]
  }, 
  {
    id: 8,
    title: "Anjum",
    description: "SDE",
    creator: "Anjum",
    imgURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
    type: "Developer",
    tags: ["Windows"]
  }];
  constructor() { }

  ngOnInit(): void {
  }
  

}
