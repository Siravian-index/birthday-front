import * as React from "react"
import {Aside, MediaQuery, Text} from "@mantine/core";

interface IProps {}

const ShellAside : React.FC<IProps> = () => {
    return <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
        <Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}}>

            <Text>Application sidebar</Text>
        </Aside>
    </MediaQuery>
}

export default ShellAside


