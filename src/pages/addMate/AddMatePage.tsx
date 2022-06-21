import * as React from "react"
import AddMateForm from "../../components/addMate/AddMateForm";
import RandomTitle from "../../components/Mantine/RandomTitle";
import SuccessAlert from "../../components/Mantine/alert/SuccessAlert";
import {useSelector} from "react-redux";
import {selectNotificationFailed, selectNotificationSuccess} from "../../redux/features/notification/notificationSlice";

interface IProps {
}

const AddMatePage: React.FC<IProps> = () => {
    const success = useSelector(selectNotificationSuccess())
    const failed = useSelector(selectNotificationFailed())
    return <>
        <RandomTitle title={"Add"}/>
        {success && <SuccessAlert/>}
        {failed && <div>failed to post</div>}
        <AddMateForm></AddMateForm>
    </>
}

export default AddMatePage


