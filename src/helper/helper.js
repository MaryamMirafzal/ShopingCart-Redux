// import { useContext } from "react";

const shortenName = (text)=>{
    return text.split(" ").slice(0,3).join(" ");
}

const searchProducts = (products , search) =>{
    if(!search) return products;
    const searchedProducts = products.filter(p=> p.title.toLowerCase().includes(search))
    return searchedProducts;
}
const filterProducts = (products, category)=>{
    if(!category) return products;
    const filteredProducts = products.filter(p => p.category == category)
    return filteredProducts
}
const createQueryObject = (currentQuery , newQuery ) =>{
    if(newQuery.category == "all"){
        const { category , ...rest } = currentQuery; // it will be delete category
        return rest
    }
    if(newQuery.search == ""){
        const { search , ...rest} = currentQuery; // it will be delete search
        return rest
    }
    return { ...currentQuery,...newQuery}
}

const sumPrice = products =>{
    return products.reduce((total, product )=> total + product.price * product.quantity , 0).toFixed(2)

}
const sumQuantity = products =>{
    return products.reduce((counter, product)=> counter + product.quantity, 0 )

}

const productQuantity = (state, id )=>{
    const index = state.selectedItems.findIndex((item)=>item.id == id);
    if (index == -1){ return 0
    }else{
        return state.selectedItems[index].quantity
    }
}


export  {shortenName , searchProducts , filterProducts , createQueryObject, sumPrice, sumQuantity , productQuantity}