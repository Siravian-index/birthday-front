import {createSlice} from "@reduxjs/toolkit";
import {INotificationState} from "./notificationTypes";
import {RootState} from "../../app/store";


const initialState: INotificationState = {
    showFailed: false,
    showSuccess: false
}


const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        turnOnSuccessNotification: (state) => {
            state.showSuccess = true
        },
        turnOffSuccessNotification: (state) => {
            state.showSuccess = false
        },
        turnOnFailNotification: (state) => {
            state.showFailed = true
        },
        turnOffFailNotification: (state) => {
            state.showFailed = false
        },
        resetNotification: (state) => {
            state.showSuccess = false
            state.showFailed = false
        }
    }
})


export const {turnOnFailNotification, turnOffFailNotification, turnOnSuccessNotification,turnOffSuccessNotification,  resetNotification} = notificationSlice.actions

export default notificationSlice.reducer


export const selectNotificationSuccess = () => (state: RootState) => state.notification.showSuccess
export const selectNotificationFailed = () => (state: RootState) => state.notification.showFailed

