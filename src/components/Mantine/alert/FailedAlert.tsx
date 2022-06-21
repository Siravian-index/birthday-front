import * as React from "react"
import {Check} from "tabler-icons-react";
import {Notification} from "@mantine/core";

interface IProps {
}

const FailedAlert: React.FC<IProps> = () => {
    return <Notification icon={<Check size={20}/>} color="red" title="We notify you that" disallowClose
                         closeButtonProps={{'aria-label': 'Hide notification'}}>
        There was an error while submitting the information to the server.
    </Notification>
}

export default FailedAlert


