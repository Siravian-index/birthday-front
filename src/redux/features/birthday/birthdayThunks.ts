import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBirthday, IDELETEResponse, IGetResponse, IPOSTPUTResponse} from "./birthdayTypes";
import {HEADERS, METHODS_HTTP} from "../../../types/generalTypes";

const ENDPOINT = 'https://birthday-sofka-tracker.herokuapp.com/v1/api/birthday/'


export const getAllBirthdaysThunk = createAsyncThunk('get/birthdays',
    async (): Promise<IGetResponse> => {
        const response = await fetch(ENDPOINT)
        if (response.ok) {
            const data = await response.json() as IBirthday[]
            return {data, error: null}
        }
        return {data: [], error: "Something went wrong while getting the data"}
    })

export const postBirthdaysThunk = createAsyncThunk('post/birthday',
    async (birthday: IBirthday): Promise<IPOSTPUTResponse> => {
        const response = await fetch(ENDPOINT, {
            headers: HEADERS,
            method: METHODS_HTTP.POST,
            body: JSON.stringify(birthday)
        })

        if (response.ok) {
            const data = await response.json() as IBirthday
            return {data, error: null}
        }
        return {data: {} as IBirthday, error: "Something went wrong while saving"}
    })

export const putBirthdaysThunk = createAsyncThunk('put/birthday',
    async (birthday: IBirthday): Promise<IPOSTPUTResponse> => {
        const response = await fetch(ENDPOINT, {
            headers: HEADERS,
            method: METHODS_HTTP.PUT,
            body: JSON.stringify(birthday)
        })
        if (response.ok) {
            const data = await response.json() as IBirthday
            return {data, error: null}
        }
        return {data: {} as IBirthday, error: "Something went wrong while updating"}
    })

export const deleteBirthdaysThunk = createAsyncThunk('delete/birthday',
    async (birthday: IBirthday): Promise<IDELETEResponse> => {
        const response = await fetch(ENDPOINT, {
            headers: HEADERS,
            method: METHODS_HTTP.DELETE,
            body: JSON.stringify(birthday)
        })
        if (response.ok) {
            return {wasDeleted: response.ok, id: `${birthday.id}`, error: null}
        }
        return {wasDeleted: response.ok, id: '', error: "Something went wrong while deleting"}
    })
