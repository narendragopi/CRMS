import { NotificationTypes } from "../constants/NotificationConstants";
import { NotificationContainer, NotificationManager } from 'react-notifications';


const initialvalue = {};
function Notifications(notification = {}, action) {
    const { type, payload } = action
    switch (type) {
        case NotificationTypes.SUCCESS:
            NotificationManager.success(payload);
            return null;
        case NotificationTypes.INFO:
            NotificationManager.info(payload);
            return null;
        case NotificationTypes.ERROR:
            NotificationManager.error(payload);
            return null;
        default: return null;
    }
}

export default Notifications;