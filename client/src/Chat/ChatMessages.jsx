import React from 'react';
import MessageListItem from './MessageListItem.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  render() {
    const height = {
      'height': '200px',
      'overflow': 'auto',
      'background-color': 'white'
    }
    return (
      <div className="all-messages" style={height} ref={(div) => {this.messageList = div;}}>
        {this.props.message.map((msg, i) => (
          <MessageListItem key={i} msg={msg} userName={this.props.userName}/>)
        )}
      </div>
    )
  }
}


export default Messages;
