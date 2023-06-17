import React from "react";

const NotificationFrom = ({ from, image, message }) => {
  return (
    <div
      className="w-full max-w-xs rounded-lg bg-white p-4 text-gray-900 shadow"
      role="alert"
    >
      <div className="mb-3 flex items-center">
        <span className="mb-1 text-sm font-semibold text-gray-900">
          New Notification
        </span>
      </div>
      <div className="flex items-center">
        <div className="relative inline-block shrink-0">
          <img className="h-12 w-12 rounded-full" src={image} alt="" />
        </div>
        <div className="ml-3 text-sm font-normal">
          <div className="text-sm font-semibold text-gray-900">{from}</div>
          <div className="text-sm font-normal">{message}</div>
          <span className="text-xs font-medium text-blue-600">
            a few seconds ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotificationFrom;
