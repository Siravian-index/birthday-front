import * as React from "react"
import {Button, Container, Text, Title} from "@mantine/core";
import {ArrowBack} from "tabler-icons-react";
import {useSelector} from "react-redux";
import {selectBirthdayError} from "../../redux/features/birthday/birthdaySlice";
import {useAppDispatch} from "../../redux/app/store";
import {getAllBirthdaysThunk} from "../../redux/features/birthday/birthdayThunks";
import {resetNotification} from "../../redux/features/notification/notificationSlice";

interface IProps {
}

const ErrorComponent: React.FC<IProps> = () => {
    const error = useSelector(selectBirthdayError())
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(getAllBirthdaysThunk())
        dispatch(resetNotification())
    }
    return <Container>
        <Title order={3} align='center'>There was an error</Title>
        <Text align='center'>{error}</Text>
            <Button
                leftIcon={<ArrowBack/>}
                onClick={handleClick}
                variant="gradient"
                gradient={{from: 'indigo', to: 'cyan'}}
            >Retry</Button>
    </Container>
}

export default ErrorComponent


