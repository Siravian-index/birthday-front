import * as React from "react"
import {Burger, Header, MediaQuery, Title, useMantineTheme} from "@mantine/core";
import ToggleDarkButton from "../ToggleDarkButton";

interface IProps {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const ShellHeader : React.FC<IProps> = ({setOpened, opened}) => {
    const theme = useMantineTheme();

    return <Header height={70} p="md">
        <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'space-between'
        }}>
            <MediaQuery largerThan="sm" styles={{display: 'none'}}>
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

export default ShellHeader


