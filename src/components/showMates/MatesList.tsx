import * as React from "react"
import {useEffect} from "react"
import {useAppDispatch} from "../../redux/app/store";
import {useSelector} from "react-redux";
import {selectBirthdayFetchStatus, selectBirthdayList} from "../../redux/features/birthday/birthdaySlice";
import {Center, Grid, Loader, SimpleGrid} from "@mantine/core";
import {getAllBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import {fetchStatus} from "../../types/generalTypes";
import MatesCard from "./MatesCard";

interface IProps {
}

const MatesList: React.FC<IProps> = () => {

    const dispatch = useAppDispatch()
    const birthdayList = useSelector(selectBirthdayList())
    const status = useSelector(selectBirthdayFetchStatus())
    const loader =
        <Center>
            <Loader color="pink" variant="bars"/>
        </Center>

    const content = birthdayList.map(b => <MatesCard  key={b.id} birthday={b}/>)

    const grid = <Grid>
        {content}
    </Grid>


    useEffect(() => {
        dispatch(getAllBirthdaysThunk())
    }, [])
    return <>
        {status === fetchStatus.PENDING && loader}
        {status === fetchStatus.SUCCESS && grid}
        {status === fetchStatus.FAILED && <div> ooopps</div>}
    </>
}

export default MatesList


