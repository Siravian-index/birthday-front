import {configureStore} from "@reduxjs/toolkit";
import birthdayReducer from "../features/birthday/birthdaySlice";
import {useDispatch} from "react-redux";
import notificationReducer from "../features/notification/notificationSlice";

export const store = configureStore({
   reducer: {
      birthday: birthdayReducer,
      notification: notificationReducer

   }
})

//types
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()