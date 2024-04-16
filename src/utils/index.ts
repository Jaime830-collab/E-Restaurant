/* TODO: CRIAR TIPO PARA filterCategories */
export function filterCategories(items: any[]){
    let categories: string[] = []

    const allCategories = items.map(value => {
        return value.category
    })
    
    allCategories.forEach(value => {
        if(!categories.includes(value)){
            categories.push(value)
        }
    })
    return categories
}
/* TODO: CRIAR TIPO PARA filterItemsByCategory */
export function filterItemsByCategory(categories: any, items: any){
    return categories.map((category:any) => {
        return { category, items: items.filter((item: any) => item.category == category)}
        
    })
}