import React, {useState} from 'react';
import {AppShell, useMantineTheme,} from '@mantine/core';
import {Outlet} from "react-router-dom";
import ShellNavbar from "../../components/Mantine/shell/ShellNavbar";
import ShellHeader from "../../components/Mantine/shell/ShellHeader";
import ShellFooter from "../../components/Mantine/shell/ShellFooter";
import ShellAside from "../../components/Mantine/shell/ShellAside";

export default function DashboardShell() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const  main = {background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],}
    return (
        <AppShell
            styles={{main}}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={<ShellNavbar opened={opened}/>}
            aside={<ShellAside/>}
            footer={<ShellFooter/>}
            header={<ShellHeader opened={opened} setOpened={setOpened}/>}
        >
            <Outlet/>
        </AppShell>
    );
}