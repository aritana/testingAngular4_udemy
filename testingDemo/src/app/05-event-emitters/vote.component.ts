
import { EventEmitter } from '@angular/core'; 

export class VoteComponent { 
  totalVotes:number = 0; 
  voteChanged = new EventEmitter();

  upVote():void { 
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}