'use strict';
import React from 'react';
import $ from 'jquery';
import { DropdownButton, MenuItem, Button, ButtonToolbar, ButtonGroup, Form, FormGroup, Col, FormControl, ControlLabel, PageHeader, Well, Modal } from 'react-bootstrap';
var Filter = require('bad-words');
var filter = new Filter();

var hostUrl = process.env.LIVE_URL || 'http://localhost:3000/';

class CreateGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameName: '',
      promptType: 'random',
      error: false,
      show: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.addGameToDB = this.addGameToDB.bind(this);
    this.handlePromptTypeSelection = this.handlePromptTypeSelection.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleChange(event) {
    var filteredGameName = filter.clean(event.target.value)
    this.setState({gameName: filteredGameName});
  }

  showModal() {
    this.setState({
      show: !this.state.show
    })
  }

  addGameToDB(gameName, promptType, callback) {
    var initialStage = promptType === 'random' ? 0 : -1;

    var gameInstance = {
      gameName: gameName,
      password: '',
      players: [],
      rounds: [
      {prompt: 'prompt 1', responses: [], winner: '', stage: initialStage, ready: []},
      {prompt: 'prompt 2', responses: [], winner: '', stage: initialStage, ready: []},
      {prompt: 'prompt 3', responses: [], winner: '', stage: initialStage, ready: []},
      {prompt: 'prompt 4', responses: [], winner: '', stage: initialStage, ready: []}],
      currentRound: 0
    }

    $.ajax({
      url: '/games',
      method: 'POST',
      headers: {'content-type': 'application/json'},
      data: JSON.stringify(gameInstance),
      success: (data) => {
        callback(gameName);
      },
      error: (err) => {
        console.log('error in login POST: ', err);
        this.setState({
          error: true
        })
      }
    });
  }

  handlePromptTypeSelection(promptType) {
    this.setState({promptType: promptType})
  }

  render() {

    const errorMessage = <p><b>That game name has already been taken. Please try again with a different game name!</b></p>

    return (
      <div id="create-game">
        <Button className="animated pulse" onClick={this.showModal} ><h4>Start a New Game</h4></Button>
          {this.state.error && errorMessage}
          <Modal show={this.state.show} onHide={this.showModal} className={"modal-container"} >
            <Modal.Header style={{"text-align":"center"}}closeButton>
              <Modal.Title >Name Your Game and Select Game Mode</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{"background-color":"#eeeeee"}}>
                <div style={{"padding-bottom":"1em"}}>
                  <input placeholder="Name Game..." type="text" value={this.state.gameName} onChange={this.handleChange} style={{"width":"100%", "height":"120%", "text-align":"center"}}/>
                </div>
                <ButtonToolbar>
                  <ButtonGroup justified style={{"padding-bottom":"1em"}}>
                    <ButtonGroup>
                      <Button eventKey="1" onSelect={() => this.handlePromptTypeSelection('random')}>Random</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button eventKey="2" onSelect={() => this.handlePromptTypeSelection('user-generated')}>User Created</Button>
                    </ButtonGroup>
                  </ButtonGroup>
                </ButtonToolbar>
            </Modal.Body>
            <Modal.Footer>
              <Button style={{"width":"100%", "text-align":"center"}} onClick={() => this.addGameToDB(this.state.gameName, this.state.promptType, this.props.sendToGame, this.showModal)}>Submit</Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}
export default CreateGame;



//<div>
            // <DropdownButton bsSize="medium" title='Prompt-Type' id='0' >
            //   <MenuItem eventKey="1" onSelect={() => this.handlePromptTypeSelection('random')}>Random</MenuItem>
            //   <MenuItem eventKey="2" onSelect={() => this.handlePromptTypeSelection('user-generated')}>User-Generated</MenuItem>
            // </DropdownButton>
            // </div>