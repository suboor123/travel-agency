'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { notificationStore } from './helper';
import NotificationBar from './component';

const NotificationWrapper = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        notificationStore.subscribe(({ notifications }) => {
            setNotifications([...notifications]);
        });
    }, []);

    const renderNotifications = () => {
        return notifications.map(({ type, message }, idx) => (
            <Fragment key={`notification-${idx}`}>
                <NotificationBar type={type} message={message} />
            </Fragment>
        ));
    };

    return <>{renderNotifications()}</>;
};

export default NotificationWrapper;
