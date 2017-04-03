'use strict';
import React from 'react';
import Prompt from './PlayingGameComponents/Prompt.jsx';
import CurrentJudge from './PlayingGameComponents/CurrentJudge.jsx';
import PlayersResponding from './PlayingGameComponents/PlayersResponding.jsx';
import SeeResponses from './PlayingGameComponents/SeeResponses.jsx';
import Winner from './PlayingGameComponents/Winner.jsx'
import RespondToPrompt from './PlayingGameComponents/RespondToPrompt.jsx';
import ChooseWinner from './PlayingGameComponents/ChooseWinner.jsx';
import Score from './PlayingGameComponents/Score.jsx';
import CreatePrompt from './PlayingGameComponents/CreatePrompt.jsx';
import JudgeCreatingPrompt from './PlayingGameComponents/JudgeCreatingPrompt.jsx';
import { Col, PageHeader, ListGroup, ListGroupItem, Well, ProgressBar, Glyphicon, Panel } from 'react-bootstrap';


class PlayingGame extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      role: null // can either be judge or player
    };

    this.getRole = this.getRole.bind(this);
  }

  componentDidMount() {
    this.getRole();
  }

  componentWillReceiveProps(nextProps) {
    this.getRole(nextProps);
  }

  getRole(nextProps) {

    if (nextProps) {
      let curRound = nextProps.game.currentRound;

      if (nextProps.game.players[curRound] === nextProps.user) {
        this.setState({role: 'judge'})
      } else {
        this.setState({role: 'player'})
      }
    } else {
      let curRound = this.props.game.currentRound;

      if (this.props.game.players[curRound] === this.props.user) {
        this.setState({role: 'judge'})
      } else {
        this.setState({role: 'player'})
      }
    }
  }

  render() {
    var curRound = this.props.game.currentRound;
    var curPrompt = this.props.game.rounds[curRound].prompt;
    var curJudge = this.props.game.players[curRound];
    var stage = this.props.game.rounds[curRound].stage;
    var responses = this.props.game.rounds[curRound].responses;
    var winner = this.props.game.rounds[curRound].winner;

    return (
      <Col id="playing-game" sm={6} smOffset={3}>
        <Well >
          <Col >
            <Panel
            header={
              <div>
                <h2>{this.props.game.gameName}</h2>
                <div>
                  Current Judge  <Glyphicon glyph="glyphicon glyphicon-user" /> {curJudge}
                </div>
                <ProgressBar>
                  <ProgressBar bsStyle="info" now={(this.props.game.currentRound + 1) * 25} label={"Question " + (this.props.game.currentRound + 1) + "/4"}/>
                </ProgressBar>
              </div>
             }
             footer={
                <div>
                  <p>Scoreboard</p>
                  <Score game={this.props.game}/>
                </div>
              }
              bsStyle="info">
              <Well>
                <p>Question {this.props.game.currentRound + 1}</p>
                {stage !== -1 && <Prompt prompt={curPrompt} className="animated zoomInDown" />}
                <Well>
                  {stage === -1 && this.state.role === 'judge' && <CreatePrompt handlePromptSubmission={this.props.handlePromptSubmission}/>}
                  {stage === -1 && this.state.role === 'player' && <JudgeCreatingPrompt judge={curJudge}/>}
                  {stage === 0 && this.state.role === 'judge' && <PlayersResponding />}
                  {stage === 0 && this.state.role === 'player' && <RespondToPrompt handleResponse={this.props.handleResponse}/>}
                  {stage === 1 && this.state.role === 'judge' && <ChooseWinner responses={responses} handleJudgeSelection={this.props.handleJudgeSelection}/>}
                  {stage === 1 && this.state.role === 'player' && <SeeResponses responses={responses}/>}
                  {stage === 2 && <Winner responses={responses} winner={winner} secondsToRound={this.props.secondsToRound}/>}
                </Well>
              </Well>
            </Panel>
          </Col>
        </Well>
      </Col>
    )
  }
}

export default PlayingGame;





















