export function addCategories(category){

    return{
        type: 'ADD_CATEGORIES',
        payload:{
            cat_name:category.cat_name,
            description:category.description,
            date:category.date,
        }
    }
}