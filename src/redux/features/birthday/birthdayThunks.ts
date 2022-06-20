import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBirthday} from "./birthdayTypes";
import {HEADERS, METHODS_HTTP} from "../../../types/generalTypes";

const ENDPOINT = 'https://birthday-sofka-tracker.herokuapp.com/v1/api/birthday/'


export const getAllBirthdaysThunk = createAsyncThunk('get/birthdays',
    async () => {
    const response = await fetch(ENDPOINT)
        return (await response.json()) as IBirthday[]
})

export const postBirthdaysThunk = createAsyncThunk('post/birthday',
    async (birthday: IBirthday) => {
        const response = await fetch(ENDPOINT, {
            headers: HEADERS ,
            method: METHODS_HTTP.POST,
            body: JSON.stringify(birthday)
        })
        return (await response.json()) as IBirthday
    })

export const deleteBirthdaysThunk = createAsyncThunk('delete/birthday',
    async (birthday: IBirthday) => {
        const response = await fetch(ENDPOINT, {
            headers: HEADERS ,
            method: METHODS_HTTP.DELETE,
            body: JSON.stringify(birthday)
        })
        console.log('delete thunk')
        console.log(response)

        return {wasDeleted: response.ok, id: `${birthday.id}`}
    })