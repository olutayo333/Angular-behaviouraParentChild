import { Component } from '@angular/core';
import { ChildOneComponent } from '../child-one/child-one.component';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildOneComponent, ChildTwoComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
