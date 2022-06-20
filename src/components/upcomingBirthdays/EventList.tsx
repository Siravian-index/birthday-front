import * as React from "react"
import {useSelector} from "react-redux";
import {selectThisMonthBirthdays} from "../../redux/features/birthday/birthdaySlice";
import {Grid} from "@mantine/core";
import Event from "./Event";

interface IProps {}

const EventList : React.FC<IProps> = () => {
    const thisMonthList = useSelector(selectThisMonthBirthdays())

    const content = thisMonthList.map(b => <Event key={b.id} birthday={b} />)
    return <Grid>
        {content}
    </Grid>
}

export default EventList


