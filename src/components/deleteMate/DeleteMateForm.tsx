import * as React from "react"
import {Button, TextInput} from "@mantine/core";

interface IProps {
    handleSubmitDeletion(): void
    secret: string
    setSecret: React.Dispatch<React.SetStateAction<string>>
}

const DeleteMateForm : React.FC<IProps> = ({handleSubmitDeletion, setSecret, secret}) => {
    return <form onSubmit={handleSubmitDeletion}>
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


