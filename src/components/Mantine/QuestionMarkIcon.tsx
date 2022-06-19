import * as React from "react"
import {ThemeIcon, useMantineColorScheme} from "@mantine/core";
import {QuestionMark} from "tabler-icons-react";

interface IProps {
}

const QuestionMarkIcon: React.FC<IProps> = () => {
    //mantine color
    const {colorScheme} = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    //variants: filled, light, outline
    return <ThemeIcon variant="light" color="gray">
        <QuestionMark
            size={12}
            strokeWidth={2}
            color={dark ? 'white' : 'black'}

        />
    </ThemeIcon>
}

export default QuestionMarkIcon


