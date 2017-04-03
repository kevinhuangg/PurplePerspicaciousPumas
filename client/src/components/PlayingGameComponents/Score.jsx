'use strict';
import React from 'react';
import { Table, Glyphicon } from 'react-bootstrap';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let players = this.props.game.players;
    let rounds = this.props.game.rounds;
    let scores = {};

    players.forEach(function(player) {
      scores[player] = 0;
    });

    rounds.forEach(function(round) {
      if (round.winner.length > 0) {
        scores[round.winner]++;
      }
    });

    return (
      <Table striped bordered condensed hover>
        <tbody>
          <tr>
            {Object.keys(scores).map((username) =>

              <td>
                <div className="animated flipInX" >
                  <p><Glyphicon glyph="glyphicon glyphicon-user" /> {username}</p>
                  <h3>{scores[username]}</h3>
                </div>
              </td>
            )}
          </tr>
        </tbody>
      </Table>
    )

    // return (
    //   <div id="score">
    //   <div><strong>Scores!</strong></div>
    //   {Object.keys(scores).map((username) =>
    //     <div> {username}: {scores[username]} </div>
    //     )}
    //   </div>
    // )
  }
}



export default Score;