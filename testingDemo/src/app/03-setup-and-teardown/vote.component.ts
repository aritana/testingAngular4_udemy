
export class VoteComponent { 
  totalVotes: number = 0; 

  upVote():void { 
    this.totalVotes++;
  }

  downVote(): void { 
    this.totalVotes--;
  }
}
