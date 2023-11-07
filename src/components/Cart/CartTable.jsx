import CartItem from './CartItem'

function CartTable() {
    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th className="product-name-thumbnail">
                        Product Name
                    </th>
                    <th className="product-price">
                        Unit Price
                    </th>
                    <th className="product-quantity">
                        Quantity
                    </th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                <CartItem
                    product={{
                        name: "Wireless Headset",
                        price: "79.00",
                    }}
                />
                <CartItem
                    product={{
                        name: "VRBOX Gaming",
                        price: "142.00",
                    }}
                />
                <tr>
                    <td colspan="6" className="actions">
                        <button
                            type="submit"
                            className="button clear-cart"
                        >
                            Clear Shopping Cart
                        </button>
                        <button
                            type="submit"
                            className="button update"
                        >
                            Update Shopping Cart
                        </button>
                        <button
                            type="submit"
                            className="button continue-shopping"
                        >
                            Continue Shopping
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartTable
