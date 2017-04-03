import React from 'react';
import Badge from './Badge.jsx';
import { Col, PageHeader, ListGroup, ListGroupItem, Well, ProgressBar, Glyphicon, Panel } from 'react-bootstrap';

var AchievementPane = (props) => {

  var pics = {'Orange King': 'http://www.clipartden.com/_thumbspd/food/fruit/Orange_Icon_4545.png', //accumulate 1000 oranges to unlock
  'Nice Try!': 'http://www.random-badge-emporium.com/ekmps/shops/randombadges/images/Game-Over-Button-Badge-Choice-Of-Sizes-Gamer-Computer-Video-Game-Humour-Cool-26806-p.jpg', //Lose 1 Game to unlock
  'Loser! Loser! Loser!': 'http://vignette2.wikia.nocookie.net/spongebob/images/e/e8/LOSER.jpg/revision/latest?cb=20140911051327', //lose 3 in a row to unlock
  'The Participation Award': 'https://static4.comicvine.com/uploads/original/11130/111301402/5471270-sticker-35mm_participationaward.jpg', //play 100 games or more
  'Popped My Cherry': 'http://techpolish.com/img/badges/noob_badge_1.png', //play 1st game to unlock
  'Turkey': 'https://thumbs.dreamstime.com/z/fresh-tangerines-oranges-badge-vector-illustration-mandarin-tangerine-diet-organic-mandarine-piece-healthy-food-juicy-84948216.jpg', //win 3 in a row
  'Veteran Orange': 'https://doodleordie.s3.amazonaws.com/i/Em-usRC0j/8qs_r0rLz.png', //play 24 hours or more
  'Beginners Luck': 'https://t0.rbxcdn.com/d7690b89838cf706e812bcf6760547dc'
  } //janky way to store pics for badges

  return (
    <Col sm={6} smOffset={3}>
      <Panel header={"Achievements"}>
        <Badge unlocked={props.data.achievements.OrangeKing} name='Orange King' pic={pics['Orange King']}/>
        <hr/>
        <Badge unlocked={props.data.achievements.GoodEffort} name='Nice Try!' pic={pics['Nice Try!']}/>
        <hr/>
        <Badge unlocked={props.data.achievements.ParticipationAward} name='Loser! Loser! Loser!' pic={pics['Loser! Loser! Loser!']}/>
        <hr/>
        <Badge unlocked={props.data.achievements.Lost3InaRow} name='The Participation Award' pic={pics['The Participation Award']}/>
        <hr/>
        <Badge unlocked={props.data.achievements.Played1stGame} name='Popped My Cherry' pic={pics['Popped My Cherry']}/>
        <hr/>
        <Badge unlocked={props.data.achievements.TimeSpentOver24Hrs} name='Nice Try!' pic={pics['Nice Try!']}/>
        <hr/>
        <Badge unlocked={props.data.achievements.Won1stGame} name='Veteran Orange' pic={pics['Veteran Orange']}/>
        <hr/>
        <Badge unlocked={props.data.achievements.Won3InaRow} name='Turkey' pic={pics['Turkey']}/>
        <hr/>
    </Panel>
  </Col>
  )
}

export default AchievementPane



