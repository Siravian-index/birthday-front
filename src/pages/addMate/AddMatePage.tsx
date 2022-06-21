import * as React from "react"
import AddMateForm from "../../components/addMate/AddMateForm";
import RandomTitle from "../../components/Mantine/RandomTitle";
import SuccessAlert from "../../components/Mantine/alert/SuccessAlert";
import {useSelector} from "react-redux";
import {
    resetNotification,
    selectNotificationFailed,
    selectNotificationSuccess
} from "../../redux/features/notification/notificationSlice";
import FailedAlert from "../../components/Mantine/alert/FailedAlert";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/app/store";

interface IProps {
}

const AddMatePage: React.FC<IProps> = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(resetNotification())
    }, [])
    const success = useSelector(selectNotificationSuccess())
    const failed = useSelector(selectNotificationFailed())
    return <>
        <RandomTitle title={"Add"}/>
        {success && <SuccessAlert content={"The birthday was registered correctly!"}/>}
        {failed && <FailedAlert content={"There was an error while adding the birthday"} />}
        <AddMateForm/>
    </>
}

export default AddMatePage


