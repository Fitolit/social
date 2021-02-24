import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from '@containers/MessageList';
import MessageInput from '@components/MessageInput';
import './style.scss'

export default () => {
    return <div className="home">
        <MessageList />
        {/* <MessageInput /> */}
    </div>;
}

