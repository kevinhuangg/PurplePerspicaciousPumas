'use strict';
import React from 'react';
import Rules from './Rules.jsx';
import { Col, PageHeader, ListGroup, ListGroupItem, Button, Well, ProgressBar, Glyphicon } from 'react-bootstrap';

class WaitingRoom extends React.Component {
    constructor(props){
      super(props);
      this.state = {}
    }

    componentDidMount() {
    this.updateCanvas();

  }

   updateCanvas() {
            const ctx = this.refs.canvas.getContext('2d');
            ctx.fillRect(0,0,1000, 200)

            var grd = ctx.createLinearGradient(0,0,300,400);
            grd.addColorStop(0, "red");
            grd.addColorStop(1, "white");

            ctx.fillStyle = grd;

            ctx.fillRect(0,0, 600, 5);
            ctx.fillRect(0,100, 600, 5);
            ctx.fillRect(0,200, 600, 5);
            ctx.fillRect(0,300, 600, 5);
            ctx.fillRect(0,400, 600, 5);
            ctx.fillRect(0,500, 600, 5);
            ctx.fillRect(0,600, 605, 5);
            ctx.fillRect(0,0, 5, 600);
            ctx.fillRect(100,0, 5, 600);
            ctx.fillRect(200,0, 5, 600);
            ctx.fillRect(300,0, 5, 600);
            ctx.fillRect(400,0, 5, 600);
            ctx.fillRect(500,0, 5, 600);
            ctx.fillRect(600,0, 5, 605);
        }


  render() {

    return (
      <div id='waiting-room'>
        <Col sm={6} smOffset={3}>
            <Col bsClass="container">
              <Col sm={3} ></Col>
              <Col sm={6} ><h1>Waiting Room</h1></Col>
              <Col sm={3} >
              <Button id="log-out" bsSize="large" onClick={this.props.sendToLobby} ><Glyphicon glyph="glyphicon glyphicon-home" /></Button>
              </Col>
            </Col>
        </Col>


        <br />
        <Col sm={6} smOffset={3}>
        <Well style={{"min-height":"6em", "padding" : "0"}}>
          <Col bsClass="container">
            <Col md={6} >
              <h3><Glyphicon glyph="glyphicon glyphicon-user" />  {this.props.user}</h3>
            </Col>
            <Col md={6} >
              <h3><Glyphicon glyph="glyphicon glyphicon-play" />  {this.props.game.gameName}</h3>
            </Col>
          </Col>
        </Well>
        <Well>
          {this.props.seconds && <h4>Game starts in {this.props.seconds} seconds!</h4>}

          <h4>ONLINE PLAYERS</h4>
            <Well>
              <h3>{this.props.game.players.length} / 4</h3>
              <p>PLAYERS CONNECTED</p>
            </Well>
          <ProgressBar>
            <ProgressBar bsStyle="success" now={this.props.game.players.length * 25}/>
          </ProgressBar>

        </Well>
        </Col>
        <br />

        <Col sm={6} smOffset={3}>
          <ListGroup>
            {this.props.game.players.map( (player) => <ListGroupItem>{player}</ListGroupItem>)}
          </ListGroup>
        </Col>
        <Col sm={6} smOffset={3}>
          <Rules/>
        </Col>
      </div>
    )
  }
}

export default WaitingRoom;

        // <canvas ref="canvas" width={605} height={600} />

