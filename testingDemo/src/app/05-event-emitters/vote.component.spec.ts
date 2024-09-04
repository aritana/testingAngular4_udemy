import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    //Arrange
    spyOn(component.voteChanged,'emit');
    //Act
    component.upVote();
    //Assert
    expect(component.voteChanged.emit).toHaveBeenCalledWith(1);
  });
});