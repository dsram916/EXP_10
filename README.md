# 🔗 WebSocket Based Real-Time Chat Application using Spring Boot & React

This project demonstrates a real-time chat system using WebSocket technology with a Spring Boot backend and React frontend.

---

## 📌 Technologies Used
Java  
Spring Boot  
WebSocket (STOMP Protocol)  
React (Vite)  
JavaScript  
HTML & CSS  
Maven  
Apache Tomcat (Embedded Server)  
Eclipse IDE  

---

## 🎯 Aim
To develop a real-time chat application using WebSockets that enables instant communication between multiple users.

---

## ⚙️ Project Workflow
Create Spring Boot project → Configure WebSocket → Connect React frontend → Send message → Process in backend → Broadcast → Display in all clients

---

## 🏗️ Backend Project Structure

<img width="569" height="821" alt="Screenshot 2026-04-22 111015" src="https://github.com/user-attachments/assets/7912a4d1-f247-483e-a61b-5f4d1e1123a6" />


The backend project is organized into different packages such as configuration, controller, and model for handling WebSocket communication.

---

## 🚀 Tomcat Initialization

<img width="1163" height="335" alt="Screenshot 2026-04-22 104955" src="https://github.com/user-attachments/assets/ea0bd304-8c9e-4682-b93a-29f74eea7719" />


The Spring Boot application starts successfully on port 8080 using the embedded Tomcat server.

---

## 💻 Frontend Project Setup

<img width="311" height="573" alt="Screenshot 2026-04-22 113137" src="https://github.com/user-attachments/assets/c32b98de-1ab0-4316-b339-e277a2f71491" />


The React frontend is created using Vite and is responsible for user interaction and WebSocket communication.

---

## 🔌 Frontend Initialization

<img width="903" height="235" alt="Screenshot 2026-04-22 110227" src="https://github.com/user-attachments/assets/541226c6-4a7f-4758-a86c-08256eb6b939" />

<img width="963" height="239" alt="Screenshot 2026-04-22 110216" src="https://github.com/user-attachments/assets/4a657552-72d8-43bf-bcb2-b18d1132d84b" />


The frontend application is successfully started and connected to the backend server.

---

## 💬 Message Exchange Between Users

<img width="1209" height="988" alt="Screenshot 2026-04-22 110151" src="https://github.com/user-attachments/assets/7d7e8225-a529-4758-9421-e9d7850394cc" />

<img width="1259" height="1014" alt="Screenshot 2026-04-22 110143" src="https://github.com/user-attachments/assets/10c2a2a5-8620-4cd7-a576-ebeea2c9f68b" />


Users are able to send and receive messages instantly through the WebSocket connection.

---

## 📡 Messages Displayed in Backend Console

<img width="276" height="105" alt="Screenshot 2026-04-22 110316" src="https://github.com/user-attachments/assets/fb72ee01-1e15-4fe2-a832-0967f59fb186" />


The backend console logs show the messages received from users, confirming successful communication.

---

## 🔗 Communication Flow

1. User sends message from frontend  
2. Message is sent to WebSocket endpoint  
3. Backend receives and processes message  
4. Message is broadcasted to all connected users  
5. All users receive the message instantly  

---

## 🚀 How to Run the Project

### Backend
- Open project in Eclipse  
- Run Spring Boot application  

### Frontend
- Open terminal in frontend folder  
- Run the development server  

---

## 🔗 Result
The real-time chat application was successfully implemented. Messages are exchanged instantly between users using WebSocket technology.

---

## 📚 Learning Outcome
- Learned WebSocket-based real-time communication  
- Understood integration of Spring Boot with React  
- Implemented client-server message flow  
- Built a full-stack real-time chat system  

---

## 💡 Conclusion
This experiment demonstrates the use of WebSockets for real-time applications, enabling efficient and fast communication between multiple users.

---
