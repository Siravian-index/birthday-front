import React, { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme, Title, Button, Anchor,
} from '@mantine/core';
import {Link, Outlet} from "react-router-dom";
import ToggleDarkButton from "../../components/Mantine/ToggleDarkButton";

export default function DashboardShell() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Navbar.Section>
                        <Anchor component={Link} to='/'>Main</Anchor>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Anchor component={Link} to='/form'>Form</Anchor>
                    </Navbar.Section>
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>

                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Title order={3}>Sofka Birthday Tracker</Title>

                        <ToggleDarkButton/>
                    </div>
                </Header>
            }
        >

            <Outlet />
        </AppShell>
    );
}