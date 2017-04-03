'use strict';
import React from 'react';
import { ListGroup, ListGroupItem, PageHeader, Glyphicon } from 'react-bootstrap';

const RoundSummary = (props) => (
  <div id="RoundSummary">
    <h4> Question:  {props.round.prompt}  </h4>
    <h5> Judge: <Glyphicon glyph="glyphicon glyphicon-user" /> {props.judge} </h5>
    <ListGroup id="responses-summary">
      {props.round.responses.map((response) => (
        <ListGroupItem bsStyle={response[1] === props.round.winner ? 'success' : 'danger'}>
          <b>{response[1]}:</b> {response[0]} {response[1] === props.round.winner && <Glyphicon glyph="ok"/>}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)


export default RoundSummary