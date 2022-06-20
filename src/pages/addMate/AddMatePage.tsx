import * as React from "react"
import AddMateForm from "../../components/addMate/AddMateForm";
import RandomTitle from "../../components/Mantine/RandomTitle";

interface IProps {}

const AddMatePage : React.FC<IProps> = () => {
    return <>
        <RandomTitle title={"Add"}/>
        <AddMateForm></AddMateForm>
    </>
}

export default AddMatePage


