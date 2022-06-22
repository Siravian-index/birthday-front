
export const formatDate = (date: Date) => {
    const [stringDate] = date.toISOString().split("T")
    return stringDate.split('-').reverse().join('-')
}

export const correctDateFormat = (date: string) => {
    const OFFSET = 1
    const [day, month, year] = date.split('-')
    return `${year}-${month}-${Number(day) + OFFSET}`
}


