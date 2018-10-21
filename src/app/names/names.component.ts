import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
 //name: string="kuldeep";
 nameList= ['kuldeep','mishra','kuldeep','mishra','kuldeep'];
   
 
 constructor() { }

  ngOnInit() {
  }

}
