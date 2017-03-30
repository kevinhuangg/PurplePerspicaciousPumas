import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
import { Router, Route, hashHistory } from 'react-router';
import Lobby from './components/Lobby.jsx';
import Home from './components/Home.jsx';
import Game from './components/Game.jsx';
import UserProfile from './components/userProfile.jsx';
// import io from 'socket.io-client';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {}

      this.sendToGame = this.sendToGame.bind(this);
      this.sendToLobby = this.sendToLobby.bind(this);
      this.sendToProfile = this.sendToProfile.bind(this);
    }

    sendToLobby(disconnectTimeOut) {
      if (disconnectTimeOut) {
        hashHistory.push('/lobby/:disconnectTimeOut');
      } else {
        hashHistory.push('/lobby');
      }
    }

    sendToGame(gameName) {
      hashHistory.push(/game/ + gameName);
    }

    sendToProfile(user) {
      hashHistory.push('/user')
    }

    render() {
      return (
        <div>
          <Router history={hashHistory}>
            <Route path="/" component={Home} sendToLobby={this.sendToLobby}/>
            <Route path="/lobby" component={Lobby} sendToGame={this.sendToGame} sendToProfile={this.sendToProfile}/>
            <Route path="/lobby/:disconnectTimeOut" component={Lobby} sendToGame={this.sendToGame} sendToProfile={this.sendToProfile}/>
            <Route path="/game/:gamename" component={Game} sendToLobby={this.sendToLobby}/>
            <Route path="/user" component={UserProfile} sendToLobby={this.sendToLobby}/>
          </Router>
        </div>
      );
    }
}
             //   <SignUp onSubmit={this.handleSignUp}/>

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

