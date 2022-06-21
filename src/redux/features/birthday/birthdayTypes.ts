import {fetchStatus} from "../../../types/generalTypes";


export interface IState {
    error: null | string
    fetchStatus: fetchStatus
    birthdayList: IBirthday[]
    filter: string
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



export interface IGetResponse {
    data: IBirthday[],
    error: null | string
}

export interface IPOSTPUTResponse {
    data: IBirthday,
    error: null | string
}

export interface IDELETEResponse {
    wasDeleted: boolean,
    error: null | string,
    id: string
}
