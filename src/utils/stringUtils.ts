import * as React from "react";

const capitalizeFirstLetterOf = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const formatString = (str: string): string => str.split(" ").map(value => capitalizeFirstLetterOf(value)).join(" ")


export const validatePhoneBeforeSetting = (underTest: string, callback:  React.Dispatch<React.SetStateAction<string>>) => {
    const isNumeric = underTest.match(/^\d*$/)
    if (isNumeric) {
        callback(underTest)
    }
}