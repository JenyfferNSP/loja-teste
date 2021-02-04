export function addProduct (value){
    return {
        type:'ADD_PRODUCT',
        value: value
    }
}

export function removeProduct (value){
    return {
        type:'REMOVE_PRODUCT',
        value: value
    }
}
