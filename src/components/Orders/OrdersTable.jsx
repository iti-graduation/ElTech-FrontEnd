import OrdersTableRow from "./OrdersTableRow"

function OrdersTable({ orders }) {
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
                        Status
                    </th>
                </tr>
            </thead>
            {orders.map((order) => {
                    return (
            <tbody>
                {order.products.map((product) => {
                    return (
                        <OrdersTableRow 
                        status={order.status}
                        product={product} 
                        />
                    );
                })}
            </tbody>
            );
        })}
        </table>
    )
}

export default OrdersTable
