import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    {path:"", component:ParentComponent},
    {path:"parent", component:ParentComponent},
    {path:"*", component:ParentComponent},
];
