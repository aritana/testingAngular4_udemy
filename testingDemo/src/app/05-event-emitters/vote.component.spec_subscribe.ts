import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    //Arrange
    let totalVotes:number | undefined;
    component.voteChanged.subscribe(tv=> totalVotes = tv);
    //Act
    component.upVote();
    //Assert
    expect(totalVotes).toBe(1);
  });
});