import { addToCart, getUserById, updateCartQty, updateUserCartTotal } from "../db/users.js";
import { saveToWishlist, removeFromWishlist, deleteFromCart } from "../db/users.js";
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
};



// Gets the amount total in the cart
export const fetchCartAmountTotal = async (req, res) => {
    try {
        const user = get(req, 'identity');
        const userInformation = await getUserById(user._id, false);
        const totalPayment = userInformation.account_details.cart.cartTotal;

        res.json(totalPayment);
    } catch (error) {
        console.error('Error fetching cart total:', error);
        res.status(500).send('Server Error');
    }
};



// Checks if item is already in wishlist and removes it if so,
// otherwise saves item to wishlist.
export const saveToAccountWishlist = async (req, res) => {
    try {
        const user = get(req, 'identity');
        const productID = req.params.id;
        let existsInWishlist = false;

        const userInformation = await getUserById(user._id, false);
        const itemsInWishlist = userInformation.account_details.wishlist.items;

        for (let index in itemsInWishlist) {
            if (productID == itemsInWishlist[index].item) {
                existsInWishlist = true;
                break;
            }
        }

        if (existsInWishlist) {
            removeFromWishlist(user._id, {
                item: productID
            })
        } else {
            saveToWishlist(user._id, {
                item: productID
            })
        }

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error saving item to wishlist:', error);
        res.status(500).send('Server Error');
    }
};



// Gets the user and products saved
// in their wishlist
export const displayUserProductsInWishlist = async (req, res) => {
    try {
        const user = get(req, 'identity');
        const userInformation = await getUserById(user._id, false);
        const itemsInWishlist = userInformation.account_details.wishlist.items;

        const formattedProductsInWishlist = await Promise.all(itemsInWishlist.map(async product => {
            const productInformation = await getProductById(product.item);
            
            return ({
                product_image: productInformation.product_image,
                product_name: productInformation.product_name,
                brand: productInformation.brand,
                ratings: productInformation.ratings,
                regular_price: productInformation.regular_price,
                sale_price: productInformation.sale_price,
                id: productInformation._id,
            })
        }));

        res.json(formattedProductsInWishlist);
    } catch (error) {
        console.error('Error displaying items in wishlist:', error);
        res.status(500).send('Server Error');
    }
};



// Decrements product quantity from
// users cart and if product quantity
// reaches 1, instead of subtracting
// quantity to zero it gets deleted off
// their cart completely
export const subtractFromCart = async (req, res) => {
    try {
        const user = get(req, 'identity');
        const productID = req.params.id;
        const productQty = 1;
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
                incrementItemQty = itemsInCart[index].quantity;
                break;
            }
        }

        if (incrementItemQty > 1) {
            updateCartQty(user._id, {
                item: productID,
                quantity: incrementItemQty - productQty,
                price_regular: itemPriceRegular,
                price_sale: itemPriceSale
            });
        } else {
            deleteFromCart(user._id, {
                item: productID
            });
        }

        if (itemPriceSale > 0) {
            newTotal = productQty * itemPriceSale;
        } else {
            newTotal = productQty * itemPriceRegular;
        }
        
        newTotal = oldCartTotal - newTotal;

        await updateUserCartTotal(user._id, newTotal);

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error subtracting item from cart:', error);
        res.status(500).send('Server Error');
    }
};