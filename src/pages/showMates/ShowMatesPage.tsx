import * as React from "react"
import MatesList from "../../components/showMates/MatesList";
import RandomTitle from "../../components/Mantine/RandomTitle";

interface IProps {}

const ShowMatesPage : React.FC<IProps> = () => {


    return <>
        <RandomTitle title={"See"}  isPlural={true}/>
        <MatesList/>
    </>
}

export default ShowMatesPage


