// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // remove quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity - 1;
        shoppingCart[id] = newQuantity;
    }
    if (quantity <= 0) {
        delete shoppingCart[id];
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
    addToDb()
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getStoredCart
}