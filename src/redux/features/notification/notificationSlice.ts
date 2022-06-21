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
        toggleSuccessNotification: (state) => {
            state.showSuccess = !state.showSuccess
        },
        toggleFailNotification: (state) => {
            state.showFailed = !state.showFailed
        },
        resetNotification: (state) => {
            state.showSuccess = false
            state.showFailed = false
        }
    }
})


export const {toggleFailNotification, toggleSuccessNotification, resetNotification} = notificationSlice.actions

export default notificationSlice.reducer


export const selectNotificationSuccess = () => (state: RootState) => state.notification.showSuccess
export const selectNotificationFailed = () => (state: RootState) => state.notification.showFailed

