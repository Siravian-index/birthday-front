import * as React from "react"
import MatesList from "../../components/showMates/MatesList";

interface IProps {}

const ShowMatesPage : React.FC<IProps> = () => {


    return <>
        <h1>Get mates</h1>
        <MatesList/>
    </>
}

export default ShowMatesPage


