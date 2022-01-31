import {Injectable} from '@angular/core';
import { Content } from "./content-interface";

@Injectable({
    providedIn: 'root' 
  })
  
export class ContentList {
    
    private contentArr:Content[];

    //constructor that initialises content Array to empty
    constructor(){
        this.contentArr = [];
    }

    //getter that returns content array
    get contentData():Content[]{
        return this.contentArr;
    }

    //add new item to content array
    addContentItem(item:Content){
        this.contentArr.push(item);
    }

    //returns number of items in Content Array
    countItems():Number{
        return this.contentArr.length;
    }

    //takes input as index from component and shows output in another page(component) of the selected index.
    showDetails(idx:Number): Content{
        debugger;
        for(var i =0;i<this.contentArr.length;i++){
            if(i==idx){
                debugger;
                return this.contentArr[i];
            }

        }
        return null;
    }

  }