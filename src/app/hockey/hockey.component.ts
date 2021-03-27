import { Component, OnInit } from '@angular/core';
interface cricketteams {
  name: string;
  players: any;
}
@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.scss']
})
export class HockeyComponent implements OnInit {
  crickets: cricketteams[] = [
    {name:'india',players:['manpreeth singh (c)','rohit sharma','shikhar dhawan','shreyas iyer','rishab pant','k l rahul','hardik pandya','krunal pandya','bhuwneshwar kumar','bumrah']},
    {name:'england',players:['adam dixon(c)','buttler','stokes','jason roy','bairstow','sam curran','tom curran','moeen ali','wood','leach','stuart board','anderson','archer']},
    {name:'new zealand',players:['blair tarrant (c)','munro','grandhome','matt henry','santner','lotham','taylor','ferguson','munro','sodhi','boult','southee','neesham']},
    {name:'australia',players:['aran zalewski(c)','darcy short','matthew wade','maxwell','smith','tim paine','nathan lyon','zampa','tye','faulkner','hazzlewood','cummins','starc']},
  ]
  players:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  show(abc)
{
  console.log(abc);
  for(let i=0;i<this.crickets.length;i++)
  {
    if(this.crickets[i].name == abc )
    {
this.players=this.crickets[i].players;
    }
  }

console.log(this.players);
}

}
