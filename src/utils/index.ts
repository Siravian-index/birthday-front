export const formatDate = (date: Date) => date.toLocaleDateString().split('-').reverse().join('-')



//dd/mm/yyyy
export const fromStringToDate = (date: string) =>  date.split('-').reverse().join('-')


