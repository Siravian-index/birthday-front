import {fetchStatus} from "../../../types/generalTypes";


export interface IState {
    error: null | string
    fetchStatus: fetchStatus
    birthdayList: IBirthday[]

}


export interface IBirthday {
    id?: string
    name: string
    age?: string
    birthday: string
    phone: string
    city: string
    maritalStatus: string
    secret: string
}


export interface IDeleteResponse {
    wasDeleted: boolean
    id: string
}

