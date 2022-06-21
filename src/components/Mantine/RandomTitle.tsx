import * as React from "react"
import {useEffect, useState} from "react"
import {Title} from "@mantine/core";

interface IProps {
    title: string
    isPlural?: boolean
}

const RandomTitle : React.FC<IProps> = ({title, isPlural = false}) => {
    const [chosen, setChosen] = useState("")
    const single = ['Buddy', 'Mate', 'Friend', 'Amigo', 'Comrade', 'Partner']
    const plural = ['Buddies', 'Mates', 'Friends', 'Amigos', 'Comrades', 'Partners']

    const randomNum = () => Math.floor(Math.random() * single.length)

    useEffect(() => {
        if (isPlural) {
            setChosen(plural[randomNum()])
        }else {
            setChosen(single[randomNum()])
        }
    }, [])
    return <>
        <Title>{title} {chosen}</Title>
    </>
}

export default RandomTitle


