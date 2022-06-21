import * as React from "react"
import {Notification} from '@mantine/core';
import {Check} from 'tabler-icons-react';


interface IProps {
    content: string
}

const SuccessAlert: React.FC<IProps> = ({content}) => {
    return <>
        <Notification icon={<Check size={20}/>} color="green" title="We notify you that" disallowClose
                      closeButtonProps={{'aria-label': 'Hide notification'}}>
            {content}
        </Notification>
    </>
}

export default SuccessAlert


