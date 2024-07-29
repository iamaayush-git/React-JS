// src/Toast.js
import React from 'react';
import './Toast.css';

const Toast = ({ message, show }) => {
    return (
        <div className={`toast ${show ? 'show' : ''}`}>
            {message}
        </div>
    );
};

export default Toast;
