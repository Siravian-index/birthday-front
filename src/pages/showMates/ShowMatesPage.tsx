import * as React from "react"
import MatesList from "../../components/showMates/MatesList";
import RandomTitle from "../../components/Mantine/RandomTitle";
import {Group} from "@mantine/core";
import FilterMates from "../../components/showMates/FilterMates";
import {useSelector} from "react-redux";
import {
    resetNotification,
    selectNotificationFailed,
    selectNotificationSuccess
} from "../../redux/features/notification/notificationSlice";
import SuccessAlert from "../../components/Mantine/alert/SuccessAlert";
import FailedAlert from "../../components/Mantine/alert/FailedAlert";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/app/store";

interface IProps {
}

const ShowMatesPage: React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(resetNotification())
    }, [])
    const success = useSelector(selectNotificationSuccess())
    const failed = useSelector(selectNotificationFailed())
    return <>
        {success && <SuccessAlert content={"The birthday was deleted correctly"}/>}
        {failed && <FailedAlert content={"Wrong secret supplied, couldn't delete birthday"} />}
        <Group position='apart'>
            <RandomTitle title={"See"} isPlural={true}/>
            <FilterMates/>
        </Group>
        <MatesList/>
    </>
}

export default ShowMatesPage


