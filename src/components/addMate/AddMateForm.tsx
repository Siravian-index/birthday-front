import * as React from "react"
import {useState} from "react"
import {Button, Container, Group, Select, TextInput} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {formatDate} from "../../utils/dateUtils";
import QuestionMarkIcon from "../Mantine/QuestionMarkIcon";
import {useAppDispatch} from "../../redux/app/store";
import {postBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import {selectMaritalStatusData} from "../../types/generalData";
import {validatePhoneBeforeSetting} from "../../utils/stringUtils";
import {toggleNotification} from "../../redux/features/birthday/birthdaySlice";

interface IProps {

}

const AddMateForm: React.FC<IProps> = () => {
    //dispatch
    const dispatch = useAppDispatch()

    //states
    const [date, setDate] = useState<Date | null>(new Date());
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [secret, setSecret] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    //
    const clearAll = () => {
        setName("")
        setLastName("")
        setCity("")
        setPhone("")
        setSecret("")
        setMaritalStatus("")
    }


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
            //double dispatch
            dispatch(toggleNotification())
            setTimeout(() => {
                dispatch(toggleNotification())
            }, 5000)
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
                        onChange={(e) => validatePhoneBeforeSetting(e.target.value, setPhone)}
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
                        data={selectMaritalStatusData}
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(`${e}`)}
                    />
                    <TextInput
                        title="This is used for future updates on your data."
                        icon={<QuestionMarkIcon/>}
                        placeholder="Secret"
                        label="Your secret"
                        required
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                    />
                </Group>
                <Button
                    variant="gradient"
                    radius='lg'
                    mt='xs'
                    type='submit'
                    gradient={{from: '#ed6ea0', to: '#ec8c69', deg: 35}}
                >Submit</Button>
            </form>
        </Container>
    </>
}

export default AddMateForm


