import { Component, OnInit } from '@angular/core';
interface cricketteams {
  name: string;
  players: any;
}
@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  crickets: cricketteams[] = [
    {name:'argentina',players:['lionel messi (c)','rohit sharma','shikhar dhawan','shreyas iyer','rishab pant','k l rahul','hardik pandya','krunal pandya','bhuwneshwar kumar','bumrah']},
    {name:'brazil',players:['neymar jr (c)','buttler','stokes','jason roy','bairstow','sam curran','tom curran','moeen ali','wood','leach','stuart board','anderson','archer']},
    {name:'germany',players:['nuer (c)','munro','grandhome','matt henry','santner','lotham','taylor','ferguson','munro','sodhi','boult','southee','neesham']},
    {name:'spain',players:['sergio ramos(c)','darcy short','matthew wade','maxwell','smith','tim paine','nathan lyon','zampa','tye','faulkner','hazzlewood','cummins','starc']},
    {name:'portugual',players:['christiano ronaldo(c)','darcy short','matthew wade','maxwell','smith','tim paine','nathan lyon','zampa','tye','faulkner','hazzlewood','cummins','starc']},
    {name:'sweden',players:['ibrahomovich (c)','darcy short','matthew wade','maxwell','smith','tim paine','nathan lyon','zampa','tye','faulkner','hazzlewood','cummins','starc']},
    {name:'wales',players:['gareth bale(c)','darcy short','matthew wade','maxwell','smith','tim paine','nathan lyon','zampa','tye','faulkner','hazzlewood','cummins','starc']},
    {name:'belgium',players:['lukaku(c)','darcy short','matthew wade','maxwell','smith','tim paine','nathan lyon','zampa','tye','faulkner','hazzlewood','cummins','starc']},

  ]
  ipls: cricketteams[]=[
    {name:'manchester',players:['bruno fernandes (c)', 'AB de Villiers', 'Yuzvendra Chahal', 'Devdutt Padikkal', 'Navdeep Saini', 'Washington Sundar', 'Mohammed Siraj', 'Kane Richardson', 'Adam Zampa', 'Josh Philippe', 'Shahbaz Ahmed','Pavan Deshpande']},
    {name:'chelsea',players:['kante(c)', 'karubn nair', 'karthik', 'tripathi', 'cutting', 'ferguson', 'harbajan', 'nagarkotti', 'kuldeep', 'rinku', 'narine','russell']},
    {name:'arsenal',players:['aubemang (c)', 'karubn nair', 'karthik', 'tripathi', 'cutting', 'ferguson', 'harbajan', 'nagarkotti', 'kuldeep', 'rinku', 'narine','russell']},
    {name:'liverpool',players:['virgil vandjik(c)', 'karubn nair', 'karthik', 'tripathi', 'cutting', 'ferguson', 'harbajan', 'nagarkotti', 'kuldeep', 'rinku', 'narine','russell']},
    {name:'manchester city',players:['aguero(c)', 'karubn nair', 'karthik', 'tripathi', 'cutting', 'ferguson', 'harbajan', 'nagarkotti', 'kuldeep', 'rinku', 'narine','russell']},
    {name:'tottenham',players:['gareth bale (c)', 'karubn nair', 'karthik', 'tripathi', 'cutting', 'ferguson', 'harbajan', 'nagarkotti', 'kuldeep', 'rinku', 'narine','russell']},
    {name:'leiceister',players:['sunayya(c)', 'karubn nair', 'karthik', 'tripathi', 'cutting', 'ferguson', 'harbajan', 'nagarkotti', 'kuldeep', 'rinku', 'narine','russell']},
    {name:'everton',players:['tommie cooz(c)', 'karubn nair', 'karthik', 'tripathi', 'cutting', 'ferguson', 'harbajan', 'nagarkotti', 'kuldeep', 'rinku', 'narine','russell']},
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
shows(abc)
{
  console.log(abc);
  for(let i=0;i<this.ipls.length;i++)
  {
    if(this.ipls[i].name == abc )
    {
this.players=this.ipls[i].players;
    }
  }

}

}
