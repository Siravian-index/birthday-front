import * as React from "react"
import {Anchor, Navbar} from "@mantine/core";
import {Link} from "react-router-dom";

interface IProps {
    opened: boolean
}

const ShellNavbar : React.FC<IProps> = ({opened}) => {
    return <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <Navbar.Section>
            <Anchor component={Link} to='/'>Main</Anchor>
        </Navbar.Section>
        <Navbar.Section>
            <Anchor component={Link} to='/form'>Form</Anchor>
        </Navbar.Section>
    </Navbar>
}

export default ShellNavbar


