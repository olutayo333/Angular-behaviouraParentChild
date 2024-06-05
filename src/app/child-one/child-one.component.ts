import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.css'
})
export class ChildOneComponent {
constructor(public serv:ServeService){}

selectedStudent: any;

updateStudent() {
throw new Error('Method not implemented.');
}
  
public studentarray = [
  { name:'Shola', age:18, status:'Available', address:'Ibadan'},
  {name:'lola', age:18, status:'Available', address:'logos'},
  { name:'segun', age:18,status:'Not-Available', address:'Ibadan'},
  { name:'Femi', age:18, status:'Available', address:'iwo'}
];

updatainfo(student:object, index:number){
  //console.log(student);
  this.serv.each.next(student);
 //JSON.parse(localStorage['create_contact'])
}


}
