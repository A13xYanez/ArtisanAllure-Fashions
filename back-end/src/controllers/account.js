import { addToCart, getUserById, updateCartQty, updateUserCartTotal } from "../db/users.js";
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
        let incrementItemQty = 0;
        let newTotal = 0;

        const userInformation = await getUserById(user._id, false);
        const productInformation = await getProductById(productID);

        const itemsInCart = userInformation.account_details.cart.items;
        const oldCartTotal = userInformation.account_details.cart.cartTotal;
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

        if (itemPriceSale > 0) {
            newTotal = productQty * itemPriceSale;
        } else {
            newTotal = productQty * itemPriceRegular;
        }
        
        newTotal += oldCartTotal;

        await updateUserCartTotal(user._id, newTotal);

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).send('Server Error');
    }
};



// Gets the user and the products they have in their
// cart to display in the cart page
export const displayUserProductsInCart = async (req, res) => {
    try {
        const user = get(req, 'identity');
        const userInformation = await getUserById(user._id, false);
        const itemsInCart = userInformation.account_details.cart.items;

        const formattedProductsInCart = await Promise.all(itemsInCart.map(async product => {
            const productInformation = await getProductById(product.item);
            
            return ({
                product_image: productInformation.product_image,
                product_name: productInformation.product_name,
                brand: productInformation.brand,
                ratings: productInformation.ratings,
                regular_price: productInformation.regular_price,
                sale_price: productInformation.sale_price,
                id: productInformation._id,
                quantity: product.quantity
            })
        }));

        res.json(formattedProductsInCart);
    } catch (error) {
        console.error('Error displaying items in cart:', error);
        res.status(500).send('Server Error');
    }
}