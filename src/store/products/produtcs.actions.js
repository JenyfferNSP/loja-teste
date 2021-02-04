export function addProduct (type, value){
    return {
        type:'ADD_PRODUCT',
        value: value
    }
}

export function removeProduct (type, value){
    return {
        type:'REMOVE_PRODUCT',
        value: value
    }
}
