import { Component, OnInit } from '@angular/core';
interface cricketteams {
  name: string;
  players: any;
}
@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss']
})
export class CricketComponent implements OnInit {
  crickets: cricketteams[] = [
    {name:'india',players:[{nam:'virat kohli (c)',details:'righthanded batsman'},{nam:'rohit sharma',details:'righthanded batsman'},{nam:'bumrah',details:'right arm fast medium'}]},
    {name:'england',players:[{nam:'eoin morgan(c)',details:'lefthanded batsman'},{nam:'bairsrtow',details:'righthanded batsman'},{nam:'archer',details:'right arm fast medium'}]},
    {name:'australia',players:[{nam:'aaron finch(c)',details:'righthanded batsman'},{nam:'smith',details:'righthanded batsman'},{nam:'cummins',details:'right arm fast medium'}]},
    {name:'newzealand',players:[{nam:'kane williamson (c)',details:'righthanded batsman'},{nam:'taylor',details:'righthanded batsman'},{nam:'southee',details:'right arm fast medium'}]}
  ]
  ipls: cricketteams[]=[
    {name:'RCB',players:[{nam:'virat kohli (c)',details:'righthanded batsman'},{nam:'Ab de villiers',details:'righthanded batsman'},{nam:'siraj',details:'right arm fast medium'}]},
    {name:'KKR',players:[{nam:'eoin morgan (c)',details:'righthanded batsman'},{nam:'karthik',details:'righthanded batsman'},{nam:'rusell',details:'right arm fast medium'}]},
    {name:'MI',players:[{nam:'rohit sharma (c)',details:'righthanded batsman'},{nam:'ishan kishan',details:'righthanded batsman'},{nam:'bumrah',details:'right arm fast medium'}]},
    {name:'DC',players:[{nam:'shreyas iyer (c)',details:'righthanded batsman'},{nam:'dhawan',details:'righthanded batsman'},{nam:'rabada',details:'right arm fast medium'}]},
    {name:'CSK',players:[{nam:'ms dhoni (c)',details:'righthanded batsman'},{nam:'du plessis',details:'righthanded batsman'},{nam:'shardul thakur',details:'right arm fast medium'}]},
    {name:'RR',players:[{nam:'sanju samson (c)',details:'righthanded batsman'},{nam:'stokes',details:'righthanded batsman'},{nam:'archer',details:'right arm fast medium'}]},
    {name:'SRH',players:[{nam:'david warner (c)',details:'righthanded batsman'},{nam:'williamson',details:'righthanded batsman'},{nam:'bhuwaneshwar',details:'right arm fast medium'}]},
    {name:'KING X1',players:[{nam:'kl rahul (c)',details:'righthanded batsman'},{nam:'gayle',details:'lefthanded batsman'},{nam:'shami',details:'right arm fast medium'}]},
  ]

  players:any=[];
  details:any;
  coll:boolean=false;
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

console.log(this.players.nam);
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
go(abc)
{
  this.coll=true;
this.details=abc;
}
 
}
