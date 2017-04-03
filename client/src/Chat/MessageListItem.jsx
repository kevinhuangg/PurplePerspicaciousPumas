import React from 'react';

var MessageListItem = function(props) {

  var styleUser = {
    backgroundColor: '#ffb03a',
    borderRadius: '5px',
    padding: '10px',
    margin: '3px 20px',
    textAlign: 'right',
    float: 'right',
    clear: 'right'
  }

  var styleFriend = {
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    padding: '10px',
    paddingLeft: '20px',
    margin: '3px 20px',
    textAlign: 'left',
    float: 'left',
    clear: 'left'
  }

  var pStyle = {
    textDecoration: 'underline'
  }
  return (
    <div>
    { props.msg.username === props.userName ?
      ( <div className="message" style={styleUser}>
          <p style={pStyle}>{props.msg.username}</p>
          <span>{props.msg.text}</span>
        </div>
      )
    : ( <div className="message" style={styleFriend}>
          <p style={pStyle}>{props.msg.username}</p>
          <span>{props.msg.text}</span>
        </div>
      )
    }
    </div>

  )
}

export default MessageListItem;
