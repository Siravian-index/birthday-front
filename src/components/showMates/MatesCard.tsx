import * as React from "react"
import {Badge, Button, Card, Group, Text, Title, useMantineTheme} from "@mantine/core";
import {IBirthday} from "../../redux/features/birthday/birthdayTypes";

interface IProps {
    birthday: IBirthday
}

const MatesCard: React.FC<IProps> = ({birthday}) => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    console.log(birthday)

    return (
        <div>
            <Card shadow="sm" p="lg">
                <Title order={4} align='center'> {birthday.name}</Title>

                <Group position="apart" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                    <Text weight={500}>Birthday: {birthday.birthday}</Text>
                        <Badge color="pink" variant="light">
                            {birthday.maritalStatus}
                        </Badge>

                </Group>

                <Group>
                    <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                        Phone: {birthday.phone}
                    </Text>
                    <Text size="sm" style={{color: secondaryColor, lineHeight: 1.5}}>
                        Phone: {birthday.city}
                    </Text>
                </Group>
            </Card>
        </div>
    )

}

export default MatesCard


