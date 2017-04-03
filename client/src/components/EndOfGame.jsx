'use strict';
import React from 'react';
import Score from './PlayingGameComponents/Score.jsx';
import GameWinner from './PlayingGameComponents/GameWinner.jsx';
import RoundSummary from './RoundSummary.jsx';
import { Col, PageHeader, Button, Well } from 'react-bootstrap';

const EndOfGame = (props) => {
	return (
		<Col id="end-of-game">
		  <PageHeader>Game Over</PageHeader>
	    <Col sm={6} smOffset={3}>
	      <h4>Final Score</h4>
	      <Score game={props.game}/>
        <br />
        <Well>
          <GameWinner game={props.game}/>
  			  <br />
  			  <RoundSummary round={props.game.rounds[3]} judge={props.game.players[3]}/>
  			  <br />
  			  <RoundSummary round={props.game.rounds[2]} judge={props.game.players[2]}/>
  			  <br />
  			  <RoundSummary round={props.game.rounds[1]} judge={props.game.players[1]}/>
  			  <br />
  			  <RoundSummary round={props.game.rounds[0]} judge={props.game.players[0]}/>
  			  <br />
          <Button onClick={() => {
              props.sendToLobby()
            }
          }>
            Return to Lobby
          </Button>
        </Well>
	    </Col>
		</Col>
	)
}

export default EndOfGame;
