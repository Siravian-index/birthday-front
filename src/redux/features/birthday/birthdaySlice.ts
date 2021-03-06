import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDELETEResponse, IGetResponse, IPOSTPUTResponse, IState} from "./birthdayTypes";
import {fetchStatus} from "../../../types/generalTypes";
import {deleteBirthdaysThunk, getAllBirthdaysThunk, postBirthdaysThunk, putBirthdaysThunk} from "./birthdayThunks";
import {RootState} from "../../app/store";
import {formatDate} from "../../../utils/dateUtils";

const initialState: IState = {
    birthdayList: [],
    fetchStatus: fetchStatus.IDLE,
    error: null,
    filter: "",
}


const birthdaySlice = createSlice({
    name: 'birthday',
    initialState,
    reducers: {
        updateFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload.toLowerCase()
        },
        updateFetchStatus: (state, action: PayloadAction<fetchStatus>) => {
            state.fetchStatus = action.payload
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
        builder.addCase(getAllBirthdaysThunk.fulfilled, (state, action: PayloadAction<IGetResponse>) => {
            const {payload: {data, error}} = action
            if (!error) {
                state.fetchStatus = fetchStatus.SUCCESS
                state.error = null
                state.birthdayList = data
            }

        })
        //    POST
        builder.addCase(postBirthdaysThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(postBirthdaysThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.FAILED
            state.error = "Something went wrong while fetching"
        })
        builder.addCase(postBirthdaysThunk.fulfilled, (state, action: PayloadAction<IPOSTPUTResponse>) => {
            const {payload: {data, error}} = action
            if (!error) {
                state.fetchStatus = fetchStatus.SUCCESS
                state.error = null
                state.birthdayList.push(data)
            } else {
                state.fetchStatus = fetchStatus.FAILED
                state.error = error
            }
        })
        //    PUT
        builder.addCase(putBirthdaysThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(putBirthdaysThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.FAILED
            state.error = "Something went wrong while fetching"
        })
        builder.addCase(putBirthdaysThunk.fulfilled, (state, action: PayloadAction<IPOSTPUTResponse>) => {
            const {payload: {data, error}} = action
            if (!error) {
                state.fetchStatus = fetchStatus.SUCCESS
                state.error = null
                state.birthdayList = state.birthdayList.map((b) => b.id === data.id ? data : b)
            } else {
                state.fetchStatus = fetchStatus.FAILED
                state.error = error
            }
        })
        //    DELETE
        builder.addCase(deleteBirthdaysThunk.pending, (state) => {
            state.fetchStatus = fetchStatus.PENDING
        })
        builder.addCase(deleteBirthdaysThunk.rejected, (state) => {
            state.fetchStatus = fetchStatus.FAILED
            state.error = "Something went wrong while deleting."
        })
        builder.addCase(deleteBirthdaysThunk.fulfilled, (state, action: PayloadAction<IDELETEResponse>) => {
            const {payload: {wasDeleted, id, error}} = action
            if (!error && wasDeleted) {
                state.fetchStatus = fetchStatus.SUCCESS
                state.error = null
                state.birthdayList = state.birthdayList.filter(b => b.id !== id)
            } else {
                state.fetchStatus = fetchStatus.FAILED
                state.error = error
            }
        })

    }
})

//actions
export const {updateFilter, updateFetchStatus} = birthdaySlice.actions

//reducer
export default birthdaySlice.reducer

//selectors

export const selectBirthdayList = () => (state: RootState) => state.birthday.birthdayList
export const selectBirthdayFilter = () => (state: RootState) => state.birthday.filter
export const selectBirthdayError = () => (state: RootState) => state.birthday.error
export const selectBirthdayFetchStatus = () => (state: RootState) => state.birthday.fetchStatus
export const selectThisMonthBirthdays = () => (state: RootState) => {
    const [, thisMonth] = formatDate(new Date()).split("-")

    return state.birthday.birthdayList.filter((b) => {
        const [, month] = b.birthday.split('-')
        return thisMonth === month
    })
}