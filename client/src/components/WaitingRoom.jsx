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


  }



  render() {

        var mainState = {
      preload: function() {
          // This function will be executed at the beginning
          // That's where we load the images and sounds
          game.load.image('bird', 'assets/frogger.png');

          game.load.image('pipe', 'assets/pipe.png');

          game.load.audio('jump', 'assets/jump.mp3');

          game.load.audio('dead', 'assets/game-over.mp3');


      },

      create: function() {
          // This function is called after the preload function
          // Here we set up the game, display sprites, etc.
          game.stage.backgroundColor = '#71c5cf';

          // Set the physics system
          game.physics.startSystem(Phaser.Physics.ARCADE);

          // Display the bird at the position x=100 and y=245
          this.bird = game.add.sprite(100, 245, 'bird');

          // Add physics to the bird
          // Needed for: movements, gravity, collisions, etc.
          game.physics.arcade.enable(this.bird);

          // Add gravity to the bird to make it fall
          this.bird.body.gravity.y = 500;

          // Call the 'jump' function when the spacekey is hit
          var spaceKey = game.input.keyboard.addKey(
                          Phaser.Keyboard.UP);
          spaceKey.onDown.add(this.jump, this);

          //create an empty group
          this.pipes = game.add.group();

          //pipe timer set to 1500
          this.timer = game.time.events.loop(2000, this.addRowOfPipes, this);

          //score keeper
          this.score = 0;

          this.labelScore = game.add.text(20, 20, "0",
            {font:"30px Arial", fill: "#ffffff"});

          // Move the anchor to the left and downward
          this.bird.anchor.setTo(-0.2, 0.5);

          //sound
          this.jumpSound = game.add.audio('jump');
          this.deadSound = game.add.audio('dead');




      },

      addOnePipe: function(x, y) {
        //create pipe @ x, y
        var pipe = game.add.sprite(x, y, 'pipe');

        // add pipe to group
        this.pipes.add(pipe);

        //enable physics on pipe
        game.physics.arcade.enable(pipe);

        //add velocity to move pipe left
        //default -200
        pipe.body.velocity.x = -200;

        //kill pipe when not visable
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;

      },

      addRowOfPipes: function() {
        // Randomly pick a number between 1 and 5
        // This will be the hole position
        var hole = Math.floor(Math.random() * 5) + 1;

        // Add the 6 pipes
        // With one big hole at position 'hole' and 'hole + 1'
        for (var i = 0; i < 8; i++)
          if (i !== hole && i !== hole + 1)
            this.addOnePipe(600, i * 60 + 10);

        //add to score
        this.score += 1;

        this.labelScore.text = this.score;
      },

      update: function() {
          // This function is called 60 times per second
          // It contains the game's logic
          if (this.bird.y < 0 || this.bird.y > 490) {
            this.restartGame();
          }

          game.physics.arcade.overlap(
            this.bird, this.pipes, this.hitPipe, null, this);

          if (this.bird.angle < 20){
            this.bird.angle += 1;
          }
      },

      hitPipe: function() {
          // If the bird has already hit a pipe, do nothing
          // It means the bird is already falling off the screen

          if(!this.bird.alive) {
            this.gameOver = game.add.text(200, 200, "GAME OVER",
              {font:"40px Arial", fill: "#ffff00"});
          }

          if (this.bird.alive == false) {
            return;
          }

          this.deadSound.play();
          // Set the alive property of the bird to false
          this.bird.alive = false;

          // Prevent new pipes from appearing
          game.time.events.remove(this.timer);

          // Go through all the pipes, and stop their movement
          this.pipes.forEach(function(p){
              p.body.velocity.x = 0;
          }, this);
      },

      jump: function() {
        if (this.bird.alive == false){
          return;
        }

        //jump set to -350
        this.bird.body.velocity.y = -192;

        // Create an animation on the bird
        var animation = game.add.tween(this.bird);

        // Change the angle of the bird to -20° in 100 milliseconds
        animation.to({angle: -20}, 100);

        // And start the animation
        animation.start();

        this.jumpSound.play();
      },

      restartGame: function() {
        game.state.start('main');
      }
    };

    //Initialize Phaser, and create a 400px by 490px game
    var game = new Phaser.Game(600, 490, Phaser.AUTO, "phaser");

    // Add the 'mainState' and call it 'main'
    game.state.add('main', mainState);

    game.state.start('main');


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
          {this.props.seconds &&
            <div>
              <h4>Game starts in {this.props.seconds} seconds!</h4>
              <ProgressBar>
                 <ProgressBar bsStyle="warning" active now={(6 - this.props.seconds) * 20} />
              </ProgressBar>
            </div>
          }

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

        <div id={"phaser"} style={{"display":"inline-block"}}>
        </div>


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

