export const ADD =(item)=>{
    return{
        type: "ADD_CART",
        payload: item
    }
}


//here item is just like an argument and it is of no other use.
export const DELETE =(id)=>{
    return{
        type: "RMV_CART",
        payload: id
    }
}