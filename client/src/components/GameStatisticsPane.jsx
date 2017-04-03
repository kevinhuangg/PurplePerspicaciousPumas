import React from 'react';
import { Col, PageHeader, ListGroup, ListGroupItem, Well, ProgressBar, Glyphicon, Panel } from 'react-bootstrap';


var GameStatisticsPane = (props) => {
  return (
    <Col sm={6} smOffset={3}>
      <Panel header={props.data.username + " Stats"}>
        <div>Games Won: {props.data.gamesWon}</div>
        <hr/>
        <div>Games Lost: {props.data.gamesLost}</div>
        <hr/>
        <div>Games Participated: {props.data.gamesParticipated}</div>
        <hr/>
        <div>Currency: {props.data.inGameCurrency} oranges</div>
        <hr/>
        <div>Current Streak: {props.data.currentStreak}</div>
        <hr/>
        <div>Longest Winning Streak: {props.data.LongestWinStreak}</div>
        <hr/>
        <div>Longest Losing Streak: {props.data.LongestLosingStreak}</div>
      </Panel>
    </Col>
  )
}

export default GameStatisticsPane;
