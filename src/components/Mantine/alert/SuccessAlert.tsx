import * as React from "react"
import {Notification, Alert} from '@mantine/core';
import {Check, AlertCircle} from 'tabler-icons-react';


interface IProps {
}

const SuccessAlert: React.FC<IProps> = () => {
    return <>
        <Notification icon={<Check size={20}/>} color="green" title="We notify you that" disallowClose
                      closeButtonProps={{'aria-label': 'Hide notification'}}>
            The birthday was registered correctly!
        </Notification>
    </>
}

export default SuccessAlert


