import React from "react";
import styled from "styled-components";

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="img" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div``;

const MessageInfo = styled.div``;