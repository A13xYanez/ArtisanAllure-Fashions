import { addToCart, getUserById, updateCartQty } from "../db/users.js";
import { getProductById } from "../db/products.js";
import pkg from 'lodash';
const { get, merge } = pkg;



// Checks if item is already in cart and updates the quantity if so,
// otherwise adds item to cart.
export const addToAccountCart = async (req, res) => {
    try {
        const user = get(req, 'identity');
        const productID = req.params.id;
        const productQty = 1;
        let existsInCart = false;
        let incrementItemQty;

        const userInformation = await getUserById(user._id, false);
        const productInformation = await getProductById(productID);

        const itemsInCart = userInformation.account_details.cart.items;
        const itemPriceRegular = productInformation.regular_price;
        const itemPriceSale = productInformation.sale_price;

        for (let index in itemsInCart) {
            if (productID == itemsInCart[index].item) {
                existsInCart = true;
                incrementItemQty = itemsInCart[index].quantity;
                break;
            }
        }

        if (existsInCart) {
            updateCartQty(user._id, {
                item: productID,
                quantity: incrementItemQty + productQty,
                price_regular: itemPriceRegular,
                price_sale: itemPriceSale
            });
        } else {
            addToCart(user._id, {
                item: productID,
                quantity: productQty,
                price_regular: itemPriceRegular,
                price_sale: itemPriceSale
            });
        }

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).send('Server Error');
    }
};