import * as React from "react"
import {Aside, MediaQuery, ScrollArea, Text} from "@mantine/core";
import EventList from "../../upcomingBirthdays/EventList";

interface IProps {
}

const ShellAside: React.FC<IProps> = () => {
    return <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
        <Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}}>
            <Aside.Section grow component={ScrollArea} mx="-xs" px="xs">
                <Text mb='xs'>Upcoming Birthdays</Text>
                <EventList/>
            </Aside.Section>
        </Aside>
    </MediaQuery>
}

export default ShellAside


