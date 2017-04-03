'use strict';
import React from 'react';
import { Col, Button, Form, FormGroup, ControlLabel, FormControl, Glyphicon } from 'react-bootstrap';
var Filter = require('bad-words');
var filter = new Filter();

class RespondToPrompt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: '',
      responded: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    var filteredResponse = filter.clean(event.target.value)
    this.setState({response: filteredResponse});
  }

  render() {

    const responseForm = (
      <Form>
      <FormGroup bsSize="large">
        <FormControl type="text" placeholder="Your Response..." onChange={this.handleInputChange} value={this.state.response} />
      </FormGroup>
        <div>
          <Button  onClick={() => {
            this.setState({responded: true});
            this.props.handleResponse(this.state.response);
              }
            } bsStyle="primary" bsSize="large" block>
            Submit
          </Button>
        </div>
      </Form>
    )



    return (
      <Col id="submit-response">
          {!this.state.responded && responseForm}
          {this.state.responded &&
            <div className="animated flip">
              <div style={{"font-weight":"3em", "font-size":"3em", "text-align":"center", "color":"#66ce42"}} >
                <Glyphicon glyph="ok"/>
              </div>
              <p>Response Submitted!</p>
            </div>
          }
      </Col>
    )
  }
}


export default RespondToPrompt;