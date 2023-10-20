import React from 'react'
import WhishlistTableRaw from './WhishlistTableRaw'

function WhishlistTable() {
    return (
        <table className="wishlist-table">
            <thead>
                <tr>
                    <th className="product-name-thumbnail">Product Name</th>
                    <th className="product-price">Unit Price</th>
                    <th className="product-quantity">Availability</th>
                    <th className="product-total">&nbsp;</th>
                    <th className="product-remove">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <WhishlistTableRaw />
                <WhishlistTableRaw />
                <WhishlistTableRaw />
            </tbody>
        </table>
    )
}

export default WhishlistTable
