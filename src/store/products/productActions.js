export function addProduct (quantidade){
	return {
		type:'ADD_PRODUCT',
		quantidade
	}
};

export function removeProduct (quantidade) {
	return {
		type:'REMOVE_PRODUCT',
		quantidade
	}
};

export function addToCart (value) {
	return {
		type: 'ADD_CART',
		value,
	}
}
