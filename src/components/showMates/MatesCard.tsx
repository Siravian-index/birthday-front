import * as React from "react"
import {ActionIcon, Badge, Button, Card, Group, Modal, Text, TextInput, Title, useMantineTheme} from "@mantine/core";
import {IBirthday} from "../../redux/features/birthday/birthdayTypes";
import {Trash} from "tabler-icons-react";
import {useAppDispatch} from "../../redux/app/store";
import {deleteBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import {useState} from "react";

interface IProps {
    birthday: IBirthday
}

const MatesCard: React.FC<IProps> = ({birthday}) => {
    const dispatch = useAppDispatch()
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [secret, setSecret] = useState("")

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];


    const handleSubmitDeletion = () => {
        const birthdayToDelete = {...birthday, secret}
        dispatch(deleteBirthdaysThunk(birthdayToDelete))
    }
    const customTrash = <ActionIcon onClick={() => setOpened(true)} variant="outline" color="pink">
        <Trash
            size={12}
        />
    </ActionIcon>

    return (
        <div>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Are you sure you want to delete it?"
            >
                <form onSubmit={handleSubmitDeletion}>
                    <TextInput
                        placeholder="Your secret"
                        label="Secret"
                        required
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                    />
                    <Button color='red' type='submit'>Delete</Button>
                </form>
            </Modal>
            <Card shadow="sm" p="lg">
                <Group grow style={{ display: 'flex', flexBasis: 'max-content'}}>
                    <Title order={4} align='center'> {birthday.name}</Title>
                    {customTrash}
                </Group>

                <Group style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
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
                        City: {birthday.city}
                    </Text>
                </Group>
            </Card>
        </div>
    )

}

export default MatesCard


