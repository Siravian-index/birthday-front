import * as React from "react"
import {Footer} from "@mantine/core";

interface IProps {}

const ShellFooter : React.FC<IProps> = () => {
    return<Footer height={60} p="md">
        Application footer
    </Footer>

}

export default ShellFooter


