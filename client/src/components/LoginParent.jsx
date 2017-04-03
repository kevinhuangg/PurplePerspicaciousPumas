import React from 'react';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';
import { Col, PageHeader} from 'react-bootstrap';


class LoginParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: false
    }
    this.handleShowSignup = this.handleShowSignup.bind(this);
  }

  handleShowSignup () {
    this.setState({
      newUser: !this.state.newUser
    })
  }

  render() {

    return (
      <Col id="LoginParent" className={"animated swing LoginStyles"}>
        {!this.state.newUser ?
        (<LogIn sendToLobby={this.props.sendToLobby} />)
        : (<SignUp sendToLobby={this.props.sendToLobby} />)
        }
        {!this.state.newUser ?
        ( <div>
            <p>New to Oranges 2 Oranges?</p>
            <button type="button" className={"btn btn-default"} onClick={this.handleShowSignup}>Sign Up</button>
          </div> )
        : ( <div>
              <p>Woops, I have an account</p>
              <button type="button" className={"btn btn-default"} onClick={this.handleShowSignup}>Log In</button>
            </div> )
        }


      </Col>
    )
  }
}


export default LoginParent;
