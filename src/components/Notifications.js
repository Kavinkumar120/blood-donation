import React from 'react';

const notificationsData = [
  { id: 1, message: "Your appointment is confirmed for tomorrow at 10:00 AM.", time: "2 mins ago" },
  { id: 2, message: "New message from support.", time: "15 mins ago" },
  { id: 3, message: "Don't forget to check your upcoming appointments!", time: "1 hour ago" },
];

const Notifications = () => {
  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>
      <p className="notifications-subtitle">Check your notifications here.</p>
      <div className="notifications-list">
        {notificationsData.length > 0 ? (
          notificationsData.map((notification) => (
            <div key={notification.id} className="notification-item">
              <p className="notification-message">{notification.message}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
          ))
        ) : (
          <p>No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
