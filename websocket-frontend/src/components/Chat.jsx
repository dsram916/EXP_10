import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const clientRef = useRef(null);

  // 🔌 WebSocket connection
  useEffect(() => {
    if (!username) return;

  const client = new Client({
  webSocketFactory: () =>
    new SockJS("https://your-backend-name.onrender.com/ws"),
  reconnectDelay: 5000,

  onConnect: () => {
    console.log("Connected ✅");

    client.subscribe("/topic/messages", (msg) => {
      const data = JSON.parse(msg.body);
      setMessages((prev) => [...prev, data]);
    });
  },

  onStompError: (err) => console.error(err),
});

    client.activate();
    clientRef.current = client;

    return () => client.deactivate();
  }, [username]);

  // 📤 Send message
  const sendMessage = (text) => {
    if (!text || !clientRef.current) return;

    clientRef.current.publish({
      destination: "/app/chat",
      body: JSON.stringify({
        sender: username,
        content: text,
      }),
    });
  };

  // 🎨 UI
  return (
    <div style={styles.container}>
      {!username ? (
        <div style={styles.loginBox}>
          <h2 style={styles.title}>💬 Chat App</h2>
          <input
            style={styles.input}
            placeholder="Enter your name"
            onKeyDown={(e) => {
              if (e.key === "Enter") setUsername(e.target.value);
            }}
          />
        </div>
      ) : (
        <div style={styles.chatBox}>
          <div style={styles.header}>
            Logged in as: {username}
          </div>

          <MessageList
            messages={messages}
            username={username}
            styles={styles}
          />

          <MessageInput sendMessage={sendMessage} styles={styles} />
        </div>
      )}
    </div>
  );
}

export default Chat;

/* 🎨 STYLES */
const styles = {
  container: {
    height: "100vh",
    background: "#0f0f0f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    color: "#fff",
  },

  loginBox: {
    background: "#1c1c1c",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },

  title: {
    marginBottom: "20px",
  },

  input: {
    padding: "12px",
    width: "100%",
    borderRadius: "10px",
    border: "none",
    background: "#2a2a2a",
    color: "#fff",
  },

  chatBox: {
    width: "400px",
    height: "600px",
    background: "#121212",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 0 25px rgba(0,0,0,0.6)",
  },

  header: {
    padding: "15px",
    background: "linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)",
    textAlign: "center",
    fontWeight: "bold",
  },

  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
  },

  myMsgWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },

  otherMsgWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "10px",
  },

  myMsg: {
    background: "linear-gradient(45deg, #833ab4, #fd1d1d)",
    padding: "10px 14px",
    borderRadius: "15px",
    maxWidth: "70%",
  },

  otherMsg: {
    background: "#262626",
    padding: "10px 14px",
    borderRadius: "15px",
    maxWidth: "70%",
  },

  sender: {
    fontSize: "11px",
    color: "#bbb",
    marginBottom: "4px",
  },

  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #333",
  },

  chatInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    background: "#2a2a2a",
    color: "#fff",
  },

  sendBtn: {
    marginLeft: "10px",
    padding: "10px 15px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(45deg, #833ab4, #fd1d1d)",
    color: "#fff",
    cursor: "pointer",
  },
};
