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

    const content = birthdayList.map(b => <Grid.Col md={6} xl={3} key={b.id}> <MatesCard  birthday={b}/> </Grid.Col>)

    const simpleGrid = <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
            {maxWidth: 980, cols: 3, spacing: 'md'},
            {maxWidth: 755, cols: 2, spacing: 'sm'},
            {maxWidth: 600, cols: 1, spacing: 'sm'},
        ]}
    >
        {content}
    </SimpleGrid>

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


