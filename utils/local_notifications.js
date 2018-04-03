import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const NOTIFICATION_KEY = 'MobileFlashCards:notifications';

export const clearLocalNotifications = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync())
  }

export const createLocalNotification = () => {
    return {
      title: "Take a quiz",
      body: "👋🏼 don't forget to take a quiz today!",
      ios: {
        sound: true,
        priority: 'high',
        sticky: true,
        vibrate: true,
      }
    }
  }

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if ( status === 'granted' ) {
                Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(20)
                tomorrow.setMinutes(0)

                Notifications.scheduleLocalNotificationAsync(
                  createLocalNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }
