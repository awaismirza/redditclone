import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Reddit Clone App';
    this.votes = 10;
    this.link = 'http://redditcloneapp.com';
   }

   voteUp(){
     this.votes += 1;
   }

   voteDown(){
     this.votes -= 1;
   }

  ngOnInit() {
  }

}
