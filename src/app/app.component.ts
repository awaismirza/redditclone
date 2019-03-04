import { Component, OnInit } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

 people: Array<any>;

 constructor(){
  this.people= [
    {name: 'Awais', age: 25, city: 'Melbourne'},
    {name: 'John', age: 60, city: 'Sydney'},
    {name: 'Peter', age: 45, city: 'Adelade'}
  ]
 }

 ngOnInit(){
   this.people.forEach(element => {
     console.log(element);
   });
 }
 
}
