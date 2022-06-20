import {createSlice} from "@reduxjs/toolkit";
import {IState} from "./birthdayTypes";
import {fetchStatus} from "../../../types/generalTypes";

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

    }
})