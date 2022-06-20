import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBirthday, IState} from "./birthdayTypes";
import {fetchStatus} from "../../../types/generalTypes";
import {getAllBirthdaysThunk, postBirthdaysThunk} from "./birthdayThunks";

const initialState: IState  = {
    birthdayList: [],
    fetchStatus: fetchStatus.IDLE,
    error: null
}



const birthdaySlice = createSlice({
    name: 'birthday',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBirthdaysThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(getAllBirthdaysThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.FAILED
            state.error = "Something went wrong while fetching"
        })
        builder.addCase(getAllBirthdaysThunk.fulfilled, (state, action:PayloadAction<IBirthday[]>) => {
            state.fetchStatus = fetchStatus.SUCCESS
            state.error = null
            state.birthdayList = action.payload
        })
    //    POST
        builder.addCase(postBirthdaysThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(postBirthdaysThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.FAILED
            state.error = "Something went wrong while fetching"
        })
        builder.addCase(postBirthdaysThunk.fulfilled, (state, action:PayloadAction<IBirthday>) => {
            state.fetchStatus = fetchStatus.SUCCESS
            state.error = null
            state.birthdayList.push(action.payload)
        })
    //    PUT
    //    DELETE

    }
})