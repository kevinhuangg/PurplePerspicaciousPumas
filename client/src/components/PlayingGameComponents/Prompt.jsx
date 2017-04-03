'use strict';
import React from 'react';
import { Col, Panel } from 'react-bootstrap';

const Prompt = (props) => (
  <Col id="prompt">
    <Panel>
      {props.prompt}
    </Panel>
    <br />
  </Col>
)


export default Prompt;