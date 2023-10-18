// Importing Link component from react-router-dom
import { Link } from "react-router-dom";

import DropdownMenu from "../../components/Home/Header/DropdownMenu";

// Importing images for website components
import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/flag.png";
import cart from "../../assets/images/cart.png";

const Header = ({ className }) => {

	return (
		<header className={`header-01 fix-header ${className}`}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-2 col-md-2">
						<div className="logo">
							<Link to="/">
								<img src={logo} alt="Goru" />
							</Link>
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
								<DropdownMenu
									className="active menu-item-has-children"
									name="Home"
									items={[
										{ to: "/", content: "Home One" },
										{ to: "/", content: "Home Two" },
									]}
								/>
								<DropdownMenu
									className="menu-item-has-children"
									name="Shop"
									items={[
										{ to: "/shop", content: "Shop Fullwidth" },
										{
											to: "/",
											content: "Shop Left Sidebar",
										},
									]}
								/>
								<DropdownMenu
									className="menu-item-has-children"
									name="Pages"
									items={[
										{ to: "/", content: "About Page" },
										{ to: "/", content: "Newsletter Page" },
									]}
								/>
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
								<img src={flag} alt="" />
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
								<img src={cart} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;