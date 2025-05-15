import React from 'react'
import Chatboticon from './Chatboticon.jsx'
const ChatMessage = ({chat}) => {
  return (
    <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
      {chat.role === "model" && <Chatboticon />}
       <p className="message-text">{chat.text}</p>
       </div>
  )
}

export default ChatMessage
