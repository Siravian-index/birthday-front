import * as React from "react"
import MatesList from "../../components/showMates/MatesList";
import RandomTitle from "../../components/Mantine/RandomTitle";
import {Group} from "@mantine/core";
import FilterMates from "../../components/showMates/FilterMates";

interface IProps {
}

const ShowMatesPage: React.FC<IProps> = () => {
    return <>
        <Group position='apart'>
            <RandomTitle title={"See"} isPlural={true}/>
            <FilterMates/>
        </Group>
        <MatesList/>
    </>
}

export default ShowMatesPage


