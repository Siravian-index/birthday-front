import * as React from "react"
import {useState} from "react"
import {Button, Container, Group, Select, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {formatDate, fromStringToDate} from "../../utils";
import QuestionMarkIcon from "../Mantine/QuestionMarkIcon";
import {useAppDispatch} from "../../redux/app/store";
import {postBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import {IBirthday} from "../../redux/features/birthday/birthdayTypes";

interface IProps {
    birthday: IBirthday
}

const UpdateMateForm: React.FC<IProps> = ({birthday: b}) => {
    //dispatch
    const dispatch = useAppDispatch()


    //split name into two
    const [firstName, surname] = b.name.split(" ")
    //format date


    //states
    const [date, setDate] = useState<Date | null>(new Date());
    const [name, setName] = useState(firstName)
    const [lastName, setLastName] = useState(surname)
    const [city, setCity] = useState(b.city)
    const [phone, setPhone] = useState(b.phone)
    const [secret, setSecret] = useState("")
    const [maritalStatus, setMaritalStatus] = useState(b.maritalStatus)
    //
    const clearAll = () => {
        setName("")
        setLastName("")
        setCity("")
        setPhone("")
        setSecret("")
        setMaritalStatus("")
    }
    //selector data options
    const data = [
        {value: 'Married', label: 'Married'},
        {value: 'Single', label: 'Single'},
        {value: 'Looking for fun', label: 'Looking for fun'},
    ]


    //on submit function
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const filled = [name, lastName, city, phone, secret, maritalStatus].every(Boolean)
        if (filled && date) {
            const newBirthday = {
                name: `${name} ${lastName}`,
                birthday: formatDate(date),
                phone,
                city,
                maritalStatus,
                secret
            }
            dispatch(postBirthdaysThunk(newBirthday))
            clearAll()
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
                        placeholder="Your secret here..."
                        label="Your secret"
                        required
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                    />
                </Group>
                <Button color="pink" radius="lg" mt='xs' type='submit'>
                    Submit
                </Button>
            </form>
        </Container>
    </>
}

export default UpdateMateForm


