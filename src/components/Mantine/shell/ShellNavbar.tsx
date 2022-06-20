import * as React from "react"
import {Navbar} from "@mantine/core";
import {MainLinks} from "./navlinks/MainLinks";

interface IProps {
    opened: boolean
}

const ShellNavbar : React.FC<IProps> = ({opened}) => {
    return <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
        <Navbar.Section>
            <MainLinks/>
        </Navbar.Section>
    </Navbar>
}

export default ShellNavbar


