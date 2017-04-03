'use strict';
import React from 'react';
import { ListGroup, ListGroupItem, Col, Button, ProgressBar } from 'react-bootstrap';

class Winner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const results = (
      <ListGroup id="winner">
        <h4>Results</h4>
        {this.props.responses.map((response) => (
          <ListGroupItem bsStyle={response[1] === this.props.winner ? 'success' : 'danger'}>
            <b>{response[1]}:</b> {response[0]} {response[1] === this.props.winner && <b>(WINNER)</b> }
          </ListGroupItem>
        ))}
          <br />
      </ListGroup>
    )

    return (
      <Col>
        <div>
        {this.props.secondsToRound &&
          <div>
          <h4>Starting next round in {this.props.secondsToRound} seconds!</h4>
          <ProgressBar>
            <ProgressBar bsStyle="warning" now={Math.abs(4 - this.props.secondsToRound) * 20} label={this.props.secondsToRound}/>
          </ProgressBar>
          </div>
        }
        {results}
        </div>
      </Col>
    )

  }
}

export default Winner