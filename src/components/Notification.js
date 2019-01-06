import React, { Component } from 'react';
import '../styles/Notification.css'

function Notification ({ className, msg }) {
  return (
    // <div className={notificationToggle}>{ msg }</div>
    <div className={className}>this is the Notification</div>
  );
}


export default Notification;