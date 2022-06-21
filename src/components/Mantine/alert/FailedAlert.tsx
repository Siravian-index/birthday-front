import * as React from "react"
import {Check} from "tabler-icons-react";
import {Notification} from "@mantine/core";

interface IProps {
    content: string

}

const FailedAlert: React.FC<IProps> = ({content}) => {
    return <Notification icon={<Check size={20}/>} color="red" title="We notify you that" disallowClose
                         closeButtonProps={{'aria-label': 'Hide notification'}}>
        {content}
    </Notification>
}

export default FailedAlert


