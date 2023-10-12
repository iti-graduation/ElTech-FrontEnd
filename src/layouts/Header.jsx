export default function Header() {
	return (
		<header className="header-01 fix-header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-2 col-md-2">
						<div className="logo">
							<a href="index.html">
								<img src="assets/images/logo.png" alt="Goru" />
							</a>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<nav className="mainmenu mobile-menu">
							<div className="mobile-btn">
								<a href="javascript: void(0);">
									<span>Menu</span>
									<i className="twi-bars"></i>
								</a>
							</div>
							<ul>
								<li className="active menu-item-has-children">
									<a href="javascript:void(0);">Home</a>
									<ul className="sub-menu">
										<li>
											<a href="index.html">Home One</a>
										</li>
										<li>
											<a href="index2.html">Home Two</a>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<a href="javascript:void(0);">Shop</a>
									<ul className="sub-menu">
										<li>
											<a href="shop-fullwidth.html">
												Shop Fullwidth
											</a>
										</li>
										<li>
											<a href="shop-left-sidebar.html">
												Shop Left Sidebar
											</a>
										</li>
										<li>
											<a href="shop-right-sidebar.html">
												Shop Right Sidebar
											</a>
										</li>
										<li>
											<a href="single-product.html">
												Shop Details
											</a>
										</li>
										<li>
											<a href="cart.html">Cart Page</a>
										</li>
										<li>
											<a href="checkout.html">
												Checkout Page
											</a>
										</li>
										<li>
											<a href="wishlist.html">
												Wishlist Page
											</a>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<a href="javascript:void(0);">Pages</a>
									<ul className="sub-menu">
										<li>
											<a href="about.html">About Page</a>
										</li>
										<li>
											<a href="newsletter.html">
												Newsletter Page
											</a>
										</li>
										<li>
											<a href="login-register.html">
												Login Register Page
											</a>
										</li>
										<li>
											<a href="404.html">404 Page</a>
										</li>
									</ul>
								</li>
								<li className="menu-item-has-children">
									<a href="javascript:void(0);">News</a>
									<ul className="sub-menu">
										<li>
											<a href="blog-right-sidebar.html">
												News Right Sidebar
											</a>
										</li>
										<li>
											<a href="blog-left-sidebar.html">
												News Left Sidebar
											</a>
										</li>
										<li>
											<a href="blog-fullwidth.html">
												News Full Width
											</a>
										</li>
										<li>
											<a href="blog-details.html">
												News Details
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-lg-4 col-md-4">
						<div className="header-cogs">
							<a
								className="search search-toggles"
								href="javascript:void(0);"
							>
								<i className="twi-search"></i>
							</a>
							<a
								className="select-country"
								href="javascript:void(0);"
							>
								<img src="assets/images/flag.png" alt="" />
								Eng
							</a>
							<a
								className="select-currency"
								href="javascript:void(0);"
							>
								<i className="twi-dollar-sign"></i>Usd
							</a>
							<a
								className="user-login"
								href="javascript:void(0);"
							>
								<i className="twi-user-circle"></i>
								<span>Account</span>
							</a>
							<a className="carts" href="javascript:void(0);">
								<span>4</span>
								<img src="assets/images/cart.png" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
