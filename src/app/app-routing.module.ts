import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponentComponent } from "./chat-component/chat-component.component";

const routes: Routes = [
  {
    path: '',
    component: ChatComponentComponent
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  // {path: '**', component: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
