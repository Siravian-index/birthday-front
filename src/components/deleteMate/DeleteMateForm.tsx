import * as React from "react"
import {Button, TextInput} from "@mantine/core";
import {deleteBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import {IBirthday} from "../../redux/features/birthday/birthdayTypes";
import {useAppDispatch} from "../../redux/app/store";

interface IProps {
    birthday: IBirthday
    secret: string
    setSecret: React.Dispatch<React.SetStateAction<string>>
}

const DeleteMateForm: React.FC<IProps> = ({ setSecret, secret, birthday}) => {
    const dispatch = useAppDispatch()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const birthdayToDelete = {...birthday, secret}
        const response = await dispatch(deleteBirthdaysThunk(birthdayToDelete)).unwrap()
        console.log(response)
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


