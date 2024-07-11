import React, { Component } from 'react';

export default function Mailbox({unreadMessages}) {

    return (
      <div className="mailbox">
        <p className="mailbox__text">MESSAGES {unreadMessages.length > 0  && <span className="mailbox__count">{unreadMessages.length}</span>}</p>
      </div>
    );
}
