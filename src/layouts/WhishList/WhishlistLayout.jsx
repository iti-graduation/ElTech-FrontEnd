import React from 'react'
import WhishlistTable from '../../components/WhishList/WhishlistTable'

function WhishlistLayout() {
  return (
    <section className="wishlist-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="woocommerce-wishlist-form" action="#">
              <WhishlistTable />
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WhishlistLayout
