import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  
  article: Article;
  constructor() {
    this.article = new Article('Reddit clone app', 'htts://redditcloneapp.com', 10);
   }
   voteUp():boolean{
     this.article.voteUp();
     return false;
   }

   voteDown():boolean{
     this.article.voteDown();
     return false;
   }

  ngOnInit() {
  }

}
