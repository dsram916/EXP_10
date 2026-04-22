function MessageList({ messages, username, styles }) {
    return (
      <div style={styles.messages}>
        {messages.map((msg, i) => {
          const isMe = msg.sender === username;
  
          return (
            <div
              key={i}
              style={isMe ? styles.myMsgWrapper : styles.otherMsgWrapper}
            >
              <div style={isMe ? styles.myMsg : styles.otherMsg}>
                {!isMe && <div style={styles.sender}>{msg.sender}</div>}
                <div>{msg.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default MessageList;