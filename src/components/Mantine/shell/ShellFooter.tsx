import * as React from "react"
import {Anchor, Footer, ThemeIcon} from "@mantine/core";
import {Coffee, Heart} from "tabler-icons-react";

interface IProps {}

const ShellFooter : React.FC<IProps> = () => {
    const roll =  (Math.floor(Math.random()* 100)) % 2 == 0
    const davidGithub = "https://github.com/Siravian-index"
    const mariaGithub = "https://github.com/MariaMarL"

    const heart = <ThemeIcon variant="outline" radius="xl" size="lg" color="pink">
        <Heart />
    </ThemeIcon>

    const coffee = <ThemeIcon variant="outline" radius="xl" size="lg" color="orange">
        <Coffee/>
    </ThemeIcon>

    const david = <Anchor href={davidGithub} target="_blank">David</Anchor>
    const maria = <Anchor href={mariaGithub} target="_blank">Maria</Anchor>
    return<Footer height={60} p="md" >
        Made with {roll ? heart : coffee} by {david} && {maria}
    </Footer>

}

export default ShellFooter


