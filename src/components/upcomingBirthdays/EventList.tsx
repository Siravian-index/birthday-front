import * as React from "react"
import {useSelector} from "react-redux";
import {selectBirthdayList} from "../../redux/features/birthday/birthdaySlice";

interface IProps {}

const EventList : React.FC<IProps> = () => {
    const list = useSelector(selectBirthdayList())
    return <></>
}

export default EventList


