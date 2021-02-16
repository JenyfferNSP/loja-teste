export function addProduct (quantity){
	return {
		type:'ADD_PRODUCT',
		quantity
	}
};

export function removeProduct (quantity) {
	return {
		type:'REMOVE_PRODUCT',
        quantity
	}
};
