import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes:number = 0
    component.voteChanged.subscribe((newVoteCount: number) => {
      totalVotes = newVoteCount;
    });

    component.upVote();

    expect(totalVotes).toBe(1);
  });
});