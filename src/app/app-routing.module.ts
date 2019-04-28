import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CardComponent } from './components/card/card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ListComponent } from './components/list/list.component';
import { TreeComponent } from './components/tree/tree.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'card',component:CardComponent},
  {path:'tabs',component:TabsComponent},
  {path:'accordion',component:AccordionComponent},
  {path:'list',component:ListComponent},
  {path:'tree',component:TreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
