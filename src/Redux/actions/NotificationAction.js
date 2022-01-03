import { NotificationTypes } from "../constants/NotificationConstants";

export const SetNotificationInfo = (Message)  => {
   dispatch({
       type: NotificationTypes.INFO,
       payload: Message
   });
}

export const SetNotificationWaring = (Message) => {
    dispatch({
        type: NotificationTypes.WARNING,
        payload: Message
    });
 }

 export const SetNotificationError = (Message)  => {
    dispatch({
        type: NotificationTypes.ERROR,
        payload: Message
    });
 }

 export const SetNotificationSuccess = (Message)  => {
    dispatch({
        type: NotificationTypes.SUCCESS,
        payload: Message
    });
 }