import * as React from "react"
import AddMateForm from "../../components/addMate/AddMateForm";
import RandomTitle from "../../components/Mantine/RandomTitle";
import SuccessAlert from "../../components/Mantine/alert/SuccessAlert";
import {useSelector} from "react-redux";
import {selectBirthdayShowNotification} from "../../redux/features/birthday/birthdaySlice";

interface IProps {
}

const AddMatePage: React.FC<IProps> = () => {
    const show = useSelector(selectBirthdayShowNotification())
    return <>
        <RandomTitle title={"Add"}/>
        {show && <SuccessAlert/>}
        <AddMateForm></AddMateForm>
    </>
}

export default AddMatePage


