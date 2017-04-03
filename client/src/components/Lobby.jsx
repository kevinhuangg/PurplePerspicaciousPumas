'use strict';
import React from 'react';
import GameList from './GameList.jsx';
import $ from 'jquery';
import CreateGame from './CreateGame.jsx';
import YourGames from './YourGames.jsx';
import PlayerDisconnected from './PlayerDisconnected.jsx'
import { Button, Form, FormGroup, Col, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import LogOut from './LogOut.jsx';
import UsernameDisplay from './usernameDisplay.jsx'

var hostUrl = process.env.LIVE_URL || 'http://localhost:3000/';

//TODO:
  // build logic to prevent users from joining a full game

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: null,
      username: null,

    }
    this.getGames = this.getGames.bind(this);
  }

  componentDidMount() {
    this.getGames();
    this.getUsername();

  }


  getGames() {
    $.ajax({
      url: '/games',
      method: 'GET',
      headers: {'content-type': 'application/json'},
      success: (data) => {
        console.log('got games: ', data);
        this.setState({
          games: data
        })
      },
      error: (err) => {
          console.log('error getting games: ', err);
      }
    });
  }

  getUsername() {
    $.ajax({
      url: '/username',
      method: 'GET',
      headers: {'content-type': 'application/json'},
      success: (username) => {
        this.setState({username: username})
      },
      error: (err) => {
        console.log('error getting username', err);
      }
    });
  }

  render() {

    return (

      <container>
        <Col id="lobby" sm={12}>
          {this.state.username ? (<PageHeader>Welcome {this.state.username} !</PageHeader>) : (<PageHeader>Lobby</PageHeader>)}
          <Button id="go-to-user-profile" bsSize="small" onClick={()=>(this.props.route.sendToProfile(this.state.username))}>My Profile</Button>
          <LogOut sendToHome={this.props.route.sendToHome}/>
          {this.props.params.disconnectTimeOut && <PlayerDisconnected/>}
          <CreateGame sendToGame={this.props.route.sendToGame}/>
        </Col>
        <Col id="lobby" sm={6} mdoffset={3} className="animated fadeInLeftBig">
          {this.state.games && <YourGames games={this.state.games} username={this.state.username} sendToGame={this.props.route.sendToGame}/>}
        </Col>
        <Col id="lobby" sm={6} mdoffset={3} className="animated fadeInRightBig">
          <h4>Current Games:</h4>
          {this.state.games && <GameList games={this.state.games} sendToGame={this.props.route.sendToGame}/>}
        </Col>
      </container>

    )
  }
}
export default Lobby;
