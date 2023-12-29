import { createContext, useState } from "react";
import DeploymentsView from "./views/DeploymentsView/DeploymentsView";
import ProjectView from "./views/ProjectView/ProjectView";

export const ApplicationContext = createContext(null);

export const AppRoutes = {
    Default: -1,
    DeploymentsView: 0,
    ProjectView: 2,
};

export const NotificationTypes = {
    Success: 0,
    Error: 2,
};

function App() {
    const [notifications, setNotifications] = useState([]);
    const [route, setRoute] = useState(AppRoutes.Default);
    const [navigationData, setNavigationData] = useState({});

    function pushNotification(message, type = NotificationTypes.Success) {
        // filter expired notifications
        let new_notifications = [...notifications];
        new_notifications = new_notifications
            .reverse()
            .filter((_, i) => i < 10)
            .reverse();

        const color =
            type == NotificationTypes.Success
                ? "bg-green-500"
                : type == NotificationTypes.Error
                  ? "bg-red-500"
                  : "bg-black";

        setNotifications([
            ...new_notifications,
            {
                id: Math.round(Math.random() * 1000),
                message: message,
                type: type,
                expire: Number(Date.now()) + 3000,
                color: color,
            },
        ]);
    }

    function navigateTo(route, data) {
        setNavigationData(data);
        setRoute(route);
    }

    const notificationsList = notifications.map((notification, idx) => (
        <div
            key={notification.expire}
            className={
                "notification-animation absolute z-20 p-5 text-white font-normal m-2 shadow-lg " +
                notification.color
            }
        >
            {notification.message}
        </div>
    ));

    const pageToDisplay =
        route == AppRoutes.DeploymentsView ? (
            <DeploymentsView navigationData={navigationData} />
        ) : route == AppRoutes.ProjectView ? (
            <ProjectView navigationData={navigationData} />
        ) : (
            <DeploymentsView navigationData={navigationData} /> // default
        );

    return (
        <ApplicationContext.Provider value={{ pushNotification, navigateTo }}>
            {notificationsList}
            <div className="w-full h-full">
                <div
                    className={`shadow-xl standard-bg absolute w-full h-full ${
                        route == AppRoutes.DeploymentsView
                            ? "screen-slide-down"
                            : route == AppRoutes.Default
                              ? "z-0"
                              : "screen-in-bg"
                    }`}
                >
                    <DeploymentsView navigationData={navigationData} />
                </div>
                <div
                    className={`shadow-xl standard-bg absolute w-full h-full ${
                        route == AppRoutes.ProjectView
                            ? "screen-slide-down"
                            : "screen-in-bg"
                    }`}
                >
                    <ProjectView navigationData={navigationData} />
                </div>
            </div>
        </ApplicationContext.Provider>
    );
}

export default App;
