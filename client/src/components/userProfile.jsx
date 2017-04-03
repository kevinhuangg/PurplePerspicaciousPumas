import React from 'react';
import $ from 'jquery';
import { Button, Form, FormGroup, Col, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import GameStatisticsPane from './GameStatisticsPane.jsx';
import AchievementPane from './AchievementPane.jsx';
import TabButton from './tabButton.jsx';

class UserProfile extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  //creating dummy data to display at the moment
  	  //TODO: refactor to real data when it is set up
  	  user: null,
  	  userDummy: {
  	  	username: 'NyanCat4Lyfe',
  	  	achievements: {OrangeKing: false, GoodEffort: true, ParticipationAward: false,
  	  				   Lost3InaRow: true, TimeSpentOver24Hrs:true, Played1stGame: false,
  	  				   Won1stGame: true, Won3InaRow: false
  	  				  },
  	  	gamesWon: 72,
  	  	gamesLost: 51,
  	  	gamesParticipated: 123,
  	  	inGameCurrency: 1337,
  	  	currentStreak: '4 Losses',
  	  	LongestLosingStreak: 4,
  	  	LongestWinStreak: 3
  	  },
  	  achievementTabActive: false,
  	  gameStatisticsTabActive: true
  	}
  	this.getUserProfile = this.getUserProfile.bind(this);
  	this.handleClickAchievementTab = this.handleClickAchievementTab.bind(this);
  	this.handleClickGameStatisticsTab = this.handleClickGameStatisticsTab.bind(this);
  }

  componentDidMount() {
  	// console.log(this.state.user)
  	this.getUserProfile(this.props.params.username)
  }

  getUserProfile(user) {
  	$.ajax({
  	  url: '/userprofile',
  	  method: 'GET',
  	  data: 'username=' + user,
  	  success: (data) => {
  	  	console.log('data retrieved about user', data)
  	  },
  	  error: (err) => {
  	  	console.log('error retrieving user profiles', err)
  	  }
  	});
  }

  handleClickGameStatisticsTab(event) {
  	this.setState({
  		achievementTabActive: false,
  		gameStatisticsTabActive: true
  	})
  }

  handleClickAchievementTab(event) {
  	this.setState({
  		achievementTabActive: true,
  		gameStatisticsTabActive: false
  	})
  }

  render(){
  	return (
  	  <Col sm={6} smOffset={3}>
        <div>
          <div>
          <Button id="return-to-lobby" bsSize="small" onClick={this.props.route.sendToLobby}>Return To Lobby</Button>
          </div>
          <div>
          <Button onClick={this.handleClickAchievementTab}>Achievement</Button>
          </div>
          <div>
          <Button onClick={this.handleClickGameStatisticsTab}>Game Statistics</Button>
          </div>
        </div>
  	    {this.state.gameStatisticsTabActive && <GameStatisticsPane data={this.state.userDummy}/>}
  	    {this.state.achievementTabActive && <AchievementPane data={this.state.userDummy}/>}
  	  </Col>
  	)
  }

}

export default UserProfile
