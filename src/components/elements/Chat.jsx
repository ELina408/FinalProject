import React, { useRef } from "react";


function Chat() {
  const chatMessagesRef = useRef(null);
  const inputRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    const message = inputRef.current.value;
    inputRef.current.value = "";
    send(message);
  }

  function send(message) {
    const messageItem = document.createElement("p");
    messageItem.textContent = message;
    messageItem.classList.add("message");

    chatMessagesRef.current.appendChild(messageItem);

    setTimeout(() => {
      chatMessagesRef.current.removeChild(messageItem);
    }, 7000);
  }

  return (
    <>
      <div className="mainChat">
        <div ref={chatMessagesRef} className="messages"></div>
      </div>

      <div className="divinput">
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            ref={inputRef}
            className="input"
            type="text"
            placeholder="Введите сообщение"
            maxLength="30"
          />
          <button className="button" tupe="submit">
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}

export default Chat;