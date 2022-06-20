export const formatDate = (date: Date) => date.toLocaleDateString().split('-').reverse().join('-')



//dd/mm/yyyy
export const fromStringToDate = (date: string) =>  date.split('-').reverse().join('-')


export const correctDateFormat = (date: string) => {
    const OFFSET = 1
    const [day, month, year] = date.split('-')
    return `${year}-${month}-${Number(day) + OFFSET}`
}


