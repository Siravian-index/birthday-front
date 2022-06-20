import * as React from "react"
import {TextInput} from "@mantine/core";
import {useSelector} from "react-redux";
import {selectBirthdayFilter, updateFilter} from "../../redux/features/birthday/birthdaySlice";
import {useDebouncedValue} from "@mantine/hooks";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../redux/app/store";

interface IProps {}

const FilterMates : React.FC<IProps> = () => {
    const [input, setInput] = useState("")
    const [debouncedValue] = useDebouncedValue(input, 300);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(updateFilter(debouncedValue))
    }, [debouncedValue])
    return <>
        <TextInput
            placeholder='Search by name...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    </>
}

export default FilterMates


