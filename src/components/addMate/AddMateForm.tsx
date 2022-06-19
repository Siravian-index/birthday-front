import * as React from "react"
import {useState} from "react"
import {Button, Container, Group, Select, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {formatDate} from "../../utils";
import QuestionMarkIcon from "../Mantine/QuestionMarkIcon";

interface IProps {
}

const AddMateForm: React.FC<IProps> = () => {

    //states
    const [date, setDate] = useState<Date | null>(new Date());
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [secret, setSecret] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")

    //selector data options
    const data = [
        {value: 'Married', label: 'Married'},
        {value: 'Single', label: 'Single'},
        {value: 'Looking for fun', label: 'Looking for fun'},
    ]




    //on submit function
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const filled = [name, lastName, city, phone, secret, maritalStatus, date].every(Boolean)
        if (filled) {
            const newBirthday = {
                name: `${name} ${lastName}`,
                birthday: formatDate(date),
                phone,
                city,
                maritalStatus,
                secret
            }
        }

    }

    return <>
        <Container size="xs" px="xs" my='xs'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Group position='left' my='xs'>
                    <TextInput
                        placeholder="Your name"
                        label="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextInput
                        placeholder="Last name"
                        label="Last name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Group>

                <Group position='left' my='xs'>
                    <DatePicker required placeholder="Pick date" label="Birthday" value={date} onChange={setDate}/>
                </Group>
                <Group position='left'>
                    <TextInput
                        placeholder="Phone"
                        label="Phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextInput
                        placeholder="City"
                        label="City"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Group>
                <Group position='left' my='xs'>
                    <Select
                        required
                        label="Marital Status"
                        placeholder="Pick one"
                        data={data}
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(`${e}`)}
                    />
                    <TextInput
                        title="This is used for future updates"
                        icon={<QuestionMarkIcon/>}
                        placeholder="Secret"
                        label="Your secret"
                        required
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                    />
                </Group>
                <Button color="pink" radius="lg" mt='xs'>
                    Submit
                </Button>
            </form>
        </Container>
    </>
}

export default AddMateForm

