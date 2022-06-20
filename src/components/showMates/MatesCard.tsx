import * as React from "react"
import {useState} from "react"
import {ActionIcon, Badge, Card, Grid, Group, Modal, Text, Title, useMantineTheme} from "@mantine/core";
import {IBirthday} from "../../redux/features/birthday/birthdayTypes";
import {Pencil, Trash} from "tabler-icons-react";
import UpdateMateForm from "../updateMate/UpdateMateForm";
import DeleteMateForm from "../deleteMate/DeleteMateForm";
import {formatString} from "../../utils/stringUtils";

interface IProps {
    birthday: IBirthday
}

const MatesCard: React.FC<IProps> = ({birthday}) => {
    const theme = useMantineTheme();
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [secret, setSecret] = useState("")

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];



    const customTrash = <ActionIcon onClick={() => setOpenDelete(true)} variant="outline" color="pink">
        <Trash
            size={12}
        />
    </ActionIcon>


    const customPencil = <ActionIcon onClick={() => setOpenEdit(true)} variant="outline" color="green">
        <Pencil
            size={12}
        />
    </ActionIcon>

    return (
        <Grid.Col md={6} xl={3} >
            {/*------Modals-----*/}
            <Modal
                opened={openDelete}
                onClose={() => setOpenDelete(false)}
                title="Are you sure you want to delete it?"
            >
                <DeleteMateForm
                    birthday={birthday}
                    secret={secret}
                    setSecret={setSecret}/>
            </Modal>
            <Modal
                opened={openEdit}
                onClose={() => setOpenEdit(false)}
                title={`Editing: ${birthday.name}`}
            >
                <UpdateMateForm birthday={birthday}/>
            </Modal>
            {/*-----------*/}
            <Card shadow="sm" p="lg">
                <Group>
                    <Title order={4} align='center'>{formatString(birthday.name)}  {`<${birthday.age}/>`}</Title>
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
                <Group mt='sm'>
                    {customTrash}
                    {customPencil}
                </Group>
            </Card>
        </Grid.Col>
    )

}

export default MatesCard


