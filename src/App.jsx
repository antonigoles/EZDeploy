import { createContext, useState } from "react";
import DeploymentsView from "./views/DeploymentsView";

export const NotificationContext = createContext(null);

function App() {
    const [notifications, setNotifications] = useState([]);

    function pushNotification(message, type) {
        // filter expired notifications
        let new_notifcations = notifications.filter(
            (e) => e.expire > Date.now(),
        );
        setNotifications([
            ...new_notifcations,
            { message: message, type: type, expire: Date.now() + 3000 },
        ]);
    }

    return (
        <NotificationContext.Provider value={{ pushNotification }}>
            {notifications.map((notification, idx) => (
                <div
                    key={idx}
                    className="notification-animation absolute z-20 bg-green-500 p-5 text-white font-normal m-2 shadow-lg"
                >
                    {notification.message}
                </div>
            ))}
            <div className="w-full h-full">
                <DeploymentsView />
            </div>
        </NotificationContext.Provider>
    );
}

export default App;
