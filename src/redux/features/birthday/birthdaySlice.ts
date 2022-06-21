import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBirthday, IDeleteResponse, IState} from "./birthdayTypes";
import {fetchStatus} from "../../../types/generalTypes";
import {deleteBirthdaysThunk, getAllBirthdaysThunk, postBirthdaysThunk, putBirthdaysThunk} from "./birthdayThunks";
import {RootState} from "../../app/store";

const initialState: IState = {
    birthdayList: [],
    fetchStatus: fetchStatus.IDLE,
    error: null,
    filter: "",
    showNotification: false
}


const birthdaySlice = createSlice({
    name: 'birthday',
    initialState,
    reducers: {
        updateFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload.toLowerCase()
        },
        toggleNotification: (state) => {
            state.showNotification = !state.showNotification
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBirthdaysThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(getAllBirthdaysThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.FAILED
            state.error = "Something went wrong while fetching"
        })
        builder.addCase(getAllBirthdaysThunk.fulfilled, (state, action: PayloadAction<IBirthday[]>) => {
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
        builder.addCase(postBirthdaysThunk.fulfilled, (state, action: PayloadAction<IBirthday>) => {
            state.fetchStatus = fetchStatus.SUCCESS
            state.error = null
            state.birthdayList.push(action.payload)
        })
        //    PUT
        builder.addCase(putBirthdaysThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(putBirthdaysThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.FAILED
            state.error = "Something went wrong while fetching"
        })
        builder.addCase(putBirthdaysThunk.fulfilled, (state, {payload}: PayloadAction<IBirthday>) => {
            state.fetchStatus = fetchStatus.SUCCESS
            state.error = null
            state.birthdayList = state.birthdayList.map((b) => b.id === payload.id ? payload : b)
        })
        //    DELETE
        builder.addCase(deleteBirthdaysThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(deleteBirthdaysThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.FAILED
            state.error = "Something went wrong while deleting"
        })
        builder.addCase(deleteBirthdaysThunk.fulfilled, (state, {
            payload: {
                wasDeleted,
                id
            }
        }: PayloadAction<IDeleteResponse>) => {
            state.fetchStatus = fetchStatus.SUCCESS
            state.error = null
            if (wasDeleted) {
                state.birthdayList = state.birthdayList.filter(b => b.id !== id)
            }

        })

    }
})

//actions
export const {updateFilter, toggleNotification} = birthdaySlice.actions

//reducer
export default birthdaySlice.reducer

//selectors

export const selectBirthdayList = () => (state: RootState) => state.birthday.birthdayList
export const selectBirthdayFilter = () => (state: RootState) => state.birthday.filter
export const selectBirthdayError = () => (state: RootState) => state.birthday.error
export const selectBirthdayShowNotification = () => (state: RootState) => state.birthday.showNotification
export const selectBirthdayFetchStatus = () => (state: RootState) => state.birthday.fetchStatus
export const selectThisMonthBirthdays = () => (state: RootState) => {
    const [year, thisMonth, today] = new Date().toLocaleDateString().split("-")
    return state.birthday.birthdayList.filter((b) => {
        const [day, month] = b.birthday.split('-')
        return (thisMonth === month && day === today) || thisMonth === month
    })
}