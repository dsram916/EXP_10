import { useState } from "react";

function MessageInput({ sendMessage, styles }) {
  const [text, setText] = useState("");

  return (
    <div style={styles.inputArea}>
      <input
        style={styles.chatInput}
        value={text}
        placeholder="Type message..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(text);
            setText("");
          }
        }}
      />
      <button
        style={styles.sendBtn}
        onClick={() => {
          sendMessage(text);
          setText("");
        }}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;