import React from 'react';
import './style.scss'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



export default (props) => {

    return <div className="message">
        <Avatar alt="Remy Sharp" src='./a.jpg' />
        <p><b>{props.name}</b></p> 
        <p>{props.text}</p>
    </div>;
}