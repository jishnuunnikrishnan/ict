import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CricketComponent} from '../app/cricket/cricket.component';
import { FootballComponent} from '../app/football/football.component';
import { HockeyComponent} from '../app/hockey/hockey.component';
import { HomeComponent} from '../app/home/home.component';
const routes: Routes = [
  {path: '' , redirectTo:'/home',pathMatch:'full'},
  {path:'cricket', component : CricketComponent},
{path:'football', component : FootballComponent},
{path:'hockey', component : HockeyComponent},
{path:'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
