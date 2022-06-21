import * as React from "react"
import {Button, TextInput} from "@mantine/core";
import {deleteBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import {IBirthday} from "../../redux/features/birthday/birthdayTypes";
import {useAppDispatch} from "../../redux/app/store";
import {
    turnOffFailNotification,
    turnOffSuccessNotification,
    turnOnFailNotification,
    turnOnSuccessNotification
} from "../../redux/features/notification/notificationSlice";

interface IProps {
    birthday: IBirthday
    secret: string
    setSecret: React.Dispatch<React.SetStateAction<string>>
}

const DeleteMateForm: React.FC<IProps> = ({setSecret, secret, birthday}) => {
    const dispatch = useAppDispatch()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const birthdayToDelete = {...birthday, secret}
        const {wasDeleted} = await dispatch(deleteBirthdaysThunk(birthdayToDelete)).unwrap()
        if (wasDeleted) {
            dispatch(turnOnSuccessNotification())
            setTimeout(() => {
                dispatch(turnOffSuccessNotification())
            }, 5000)
        } else {
            dispatch(turnOnFailNotification())
            setTimeout(() => {
                dispatch(turnOffFailNotification())
            }, 5000)
        }

    }
    return <form onSubmit={(e) => handleSubmit(e)}>
        <TextInput
            placeholder="Your secret"
            label="Secret"
            required
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            mb="xs"
        />
        <Button color='red' type='submit'>Delete</Button>
    </form>
}

export default DeleteMateForm


