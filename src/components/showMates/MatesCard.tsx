import * as React from "react"
import {useState} from "react"
import {ActionIcon, Badge, Card, Group, Modal, Text, Title, useMantineTheme, Grid} from "@mantine/core";
import {IBirthday} from "../../redux/features/birthday/birthdayTypes";
import {Pencil, Trash} from "tabler-icons-react";
import {useAppDispatch} from "../../redux/app/store";
import {deleteBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import UpdateMateForm from "../updateMate/UpdateMateForm";
import DeleteMateForm from "../deleteMate/DeleteMateForm";

interface IProps {
    birthday: IBirthday
}

const MatesCard: React.FC<IProps> = ({birthday}) => {
    const dispatch = useAppDispatch()
    const theme = useMantineTheme();
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [secret, setSecret] = useState("")

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];


    const handleSubmitDeletion = () => {
        const birthdayToDelete = {...birthday, secret}
        dispatch(deleteBirthdaysThunk(birthdayToDelete))
    }
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
                    handleSubmitDeletion={handleSubmitDeletion}
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
                    <Title order={4} align='center'> {birthday.name}</Title>
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


