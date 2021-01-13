import React from 'react';
import { connect } from 'react-redux'; 
import {popNotification} from '../../redux/actionCreators';
import s from './index.scss';

const getNotificationTimeout = (msg, wpm, animationDelay) => {
    const wordsCount = msg.split(' ').length;
    const ret = animationDelay * 2 + (1000 * wordsCount / (wpm / 60));
    console.log(ret);
    return ret;
}

const NotificationController = ({msg, queue, popNotification, wpm, isShowing}) => {
    if (!msg)
    {
        if (queue.length){
            popNotification();
        }
        return null;
    }
    popNotification(getNotificationTimeout(msg.title + ' ' + msg.content, wpm, 500));
    return (
        <div className="notification-container">
            <h2 className="notification-title">{msg.title}</h2>
            <div className="notification-content">{msg.content}</div>
        </div>
    );

};

const mapStateToProps = ({notificationInfo}) => (
    {
        msg: notificationInfo.activeNotification,
        queue: notificationInfo.queue,
        wpm: notificationInfo.wpm,
        isShowing: notificationInfo.isShowing,
    }
);

const mapDispatchToProps = {
    popNotification,
}
export default connect(mapStateToProps, mapDispatchToProps)(NotificationController);
