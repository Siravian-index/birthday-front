export const formatDate = (date: Date) => date.toLocaleDateString().split('-').reverse().join('-')



//toggles between these formats
//dd/mm/yyyy
//yyyy/mm/dd
export const toggleDateFormat = (date: string) =>  date.split('-').reverse().join('-')


export const correctDateFormat = (date: string) => {
    const OFFSET = 1
    const [day, month, year] = date.split('-')
    return `${year}-${month}-${Number(day) + OFFSET}`
}


