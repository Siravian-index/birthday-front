import * as React from "react"
import {Button, Container, Text, Title} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {ArrowBack} from "tabler-icons-react";

interface IProps {
}

const PageNotFound: React.FC<IProps> = () => {
    const navigate = useNavigate()

    return <Container>
        <Title order={1} align='center'>404</Title>
        <Text align='center'>Not found</Text>
        <Button
            leftIcon={<ArrowBack/>}
            onClick={() => navigate("/")}
            variant="gradient"
            gradient={{from: 'indigo', to: 'cyan'}}
        >Go back</Button>
    </Container>
}

export default PageNotFound


