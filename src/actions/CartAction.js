import { types } from '../types/types';
import { db } from '../firebase/firebase-config';
import Swal from 'sweetalert2'



export const addCartShopping = (product, cantidad) => {
    return async (dispatch, getSate) => {

        const uid = getSate().login.uid

        const newProduct = {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            cantidad: cantidad
        }

        const docRef = await db.collection(`${uid}/ecommerce/cart`).add(newProduct)
        console.log(docRef.uid);
        dispatch(
            cartShopping(docRef.uid, newProduct))
    }
}

export const cartShopping = (id, newProduct) => ({
    type: types.AddToCart,
    payload: {
        id, ...newProduct
    }
});