import { Component } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.css'
})
export class ChildTwoComponent {
  public msg =''
  public obj:any={}
  constructor(public serve:ServeService){}

  ngOnInit(){
    this.serve.each.subscribe((response)=>{
      //console.log(response);
      this.obj=response
      
    })
  }
}
