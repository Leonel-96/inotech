
export function addProduct(product){

    return{
        type:'ADD_PRODUCTS',
        payload:{
            prod_name: product.prod_name,
            category: product.category,
            description: product.description,
            image:product.image,
            date:product.date,
            price:product.price,
        }

    }
} 

