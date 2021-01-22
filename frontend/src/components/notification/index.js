import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import {popNotification, resetActiveNotification} from '../../redux/actionCreators';
import s from './index.scss';

const NotificationController = ({msg, queue, popNotification, resetActiveNotification, wpm, isShowing}) => {
    const msgClass = 'notification__'+ (msg?.type?.toLowerCase() || 'default');
    useEffect(() => {
        if (!msg)
        {
            if (queue.length){
                popNotification();
                resetActiveNotification(4000);
            }
            return null;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queue, msg])
    return !!msg && (
        <div className={`notification-container ${msgClass}`}>
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
    resetActiveNotification
}
export default connect(mapStateToProps, mapDispatchToProps)(NotificationController);
