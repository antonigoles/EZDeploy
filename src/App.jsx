import { createContext, useState } from 'react'
import DeploymentsView from './views/DeploymentsView'

export const NotificationContext = createContext(null)

function App() {
    const [notifications, setNotifications] = useState([])

    function pushNotification(message, type) {
        // filter expired notifications
        let new_notifcations = notifications.filter(
            (e) => e.expire > Date.now(),
        )
        setNotifications([
            ...new_notifcations,
            { message: message, type: type, expire: Date.now() + 3000 },
        ])
        console.log('PCHNOLEM NOTYFIKACJE', message, type)
    }

    return (
        <NotificationContext.Provider value={{ pushNotification }}>
            <div className="w-full h-full">
                <DeploymentsView />
            </div>
        </NotificationContext.Provider>
    )
}

export default App
