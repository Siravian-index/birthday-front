import * as React from "react"
import {useEffect} from "react"
import {useAppDispatch} from "../../redux/app/store";
import {useSelector} from "react-redux";
import {
    selectBirthdayFetchStatus,
    selectBirthdayFilter,
    selectBirthdayList
} from "../../redux/features/birthday/birthdaySlice";
import {Center, Grid, Loader} from "@mantine/core";
import {getAllBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import {fetchStatus} from "../../types/generalTypes";
import MatesCard from "./MatesCard";
import ErrorComponent from "../error/ErrorComponent";

interface IProps {
}

const MatesList: React.FC<IProps> = () => {

    const dispatch = useAppDispatch()
    const birthdayList = useSelector(selectBirthdayList())
    const status = useSelector(selectBirthdayFetchStatus())
    const filter = useSelector(selectBirthdayFilter())

    const loader =
        <Center>
            <Loader color="pink" variant="bars"/>
        </Center>

    const content = birthdayList
        .filter(b => b.name.toLowerCase().includes(filter))
        .map(b => <MatesCard  key={b.id} birthday={b}/>)

    const grid = <Grid mt='xs'>
        {content}
    </Grid>


    useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getAllBirthdaysThunk())
        }
    }, [dispatch])
    return <>
        {status === fetchStatus.PENDING && loader}
        {status === fetchStatus.SUCCESS && grid}
        {status === fetchStatus.FAILED && <ErrorComponent/>}
    </>
}

export default MatesList


