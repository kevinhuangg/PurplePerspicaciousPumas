import React from 'react';
import { Col, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';

class Rules extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleShowRules = this.handleShowRules.bind(this);
  }

  handleShowRules () {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (

      <div>
      <button type="button" className={"btn btn-default"} onClick={this.handleShowRules}>Game Rules</button>

        <Modal show={this.state.show} onHide={this.handleShowRules} className={"modal-container"} >
          <Modal.Header closeButton>
            <Modal.Title>Rule Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
                <ListGroupItem><b>1. </b>Each round, one player will take a turn as the judge. There are
                four rounds, so each player will have one turn as the judge.</ListGroupItem>
                <ListGroupItem><b>2. </b>The judge's role is to pick the funniest response submitted by the other players.</ListGroupItem>
                <ListGroupItem><b>3. </b>If the game is a <em>User-Generated Prompt game</em>, the judge will start the round
                by creating the prompt for that round. If the game is a <em>Random Prompt</em> game, each round's prompt
                will be randomly generated.</ListGroupItem>
                <ListGroupItem><b>4. </b>Then, each player will try to come up with
                the funniest response to the prompt.</ListGroupItem>
                <ListGroupItem><b>5. </b> Once all players have submitted a response, the judge will select the
                funniest response.</ListGroupItem>
                <ListGroupItem><b>6. </b> This will repeat for four rounds until all players have taken a turn as the judge.</ListGroupItem>
                <ListGroupItem><b>7. </b> After the fourth round, we declare the winner!</ListGroupItem>
                <ListGroupItem><b>8. </b> Round 1 will begin as soon as the fourth player joins the game. Enjoy!</ListGroupItem>
              </ListGroup>
          </Modal.Body>
          <Modal.Footer>
             <button className={"btn btn-default"} onClick={this.handleShowRules}>Close</button>
          </Modal.Footer>
       </Modal>
      </div>

    )
  }
}


export default Rules;
