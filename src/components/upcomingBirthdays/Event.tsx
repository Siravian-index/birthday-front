import * as React from "react"
import {IBirthday} from "../../redux/features/birthday/birthdayTypes";
import {Badge, Card, Grid, Group, Text, Title, useMantineTheme} from "@mantine/core";

interface IProps {
    birthday: IBirthday
}

const Event : React.FC<IProps> = ({birthday}) => {
    const theme = useMantineTheme();

    return <Grid.Col>
        <Card shadow="sm" p="lg">
            <Group>
                <Title order={4} align='center'>{birthday.name} </Title>
            </Group>

            <Group style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                <Text weight={500}>Birthday: {birthday.birthday}</Text>
                <Badge color="green" variant="light">
                    Happy Birthday!
                </Badge>
            </Group>
        </Card>
    </Grid.Col>
}

export default Event


