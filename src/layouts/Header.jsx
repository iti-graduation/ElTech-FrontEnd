// Importing jQuery from node modules
import $ from "jquery";
// Importing TimelineLite, Power2 from gsap core module
import { TimelineLite, Power2 } from "gsap/gsap-core";

// Importing useEffect hook from react
import { useEffect } from "react";

// Importing Link component from react-router-dom
import { Link } from "react-router-dom";

import DropdownMenu from "../components/Header/DropdownMenu";

// Importing images for website components
import logo from "./../assets/images/logo.png";
import flag from "./../assets/images/flag.png";
import cart from "./../assets/images/cart.png";

export default function Header() {
	useEffect(() => {
		// This function adds a scroll event listener to the window
		$(window).on("scroll", function () {
			// When the window is scrolled down 40px from the top, it adds classes to the .fix-header element
			if ($(window).scrollTop() > 40) {
				$(".fix-header").addClass("sticky animated fadeIn");
			} else {
				// When the window is scrolled up to top, it removes classes from the .fix-header element
				$(".fix-header").removeClass("sticky animated fadeIn");
			}
		});

		// This function adds load and resize event listeners to the window
		$(window).on("load resize", function (e) {
			// When the window is less than 991px wide, it modifies the .mobile-btn and .mobile-menu elements
			if ($(window).width() < 991) {
				// Toggling dropdown menu on click event
				$(".mobile-btn a").on("click", function (e) {
					// Prevents the default action of the event
					e.preventDefault();
					// Stops the currently-running animation on the matched elements.
					$(".mobile-menu > ul").stop(true, true).slideToggle();
				});

				// Appends the span.submenu-toggler to each .menu-item-has-children
				$(".mobile-menu ul li.menu-item-has-children").each(
					function () {
						var $this = $(this);
						$this.append(
							'<span class="submenu-toggler"><i class="twi-caret-down"></i></span>'
						);
					}
				);

				// Toggling sub-menu on click event of span.submenu-toggler
				$(
					".mobile-menu ul li.menu-item-has-children > span.submenu-toggler"
				).on("click", function () {
					var $this = $(this);

					// If the span.submenu-toggler contains the .active-span class
					if ($(this).hasClass("active-span")) {
						// Changing the class name of the i element inside the span for visual manipulation
						$("i", $this)
							.removeClass("twi-caret-up")
							.addClass("twi-caret-down");
					} else {
						$("i", $this)
							.addClass("twi-caret-up")
							.removeClass("twi-caret-down");
					}

					// Toggling sub-menu display
					$(this).prev("ul.sub-menu").slideToggle();
					// Togglening active-span class
					$(this).toggleClass("active-span");
				});
			}
		});

		// Listens for a click event on an element with id hamburger
		$("#hamburger").on("click", function (e) {
			// Prevents the default action of the event
			e.preventDefault();
			// Adds active class to .popup_menu and fades it in
			$(".popup_menu").addClass("active").fadeIn();
			// Delays the following code execution for 20 milliseconds
			setTimeout(function () {
				// Checks if .popup_menu has a class active
				if ($(".popup_menu").hasClass("active")) {
					// Creates an instance of TimelineLite
					var tlMenu = new TimelineLite();
					// Sets initial properties on .animated_menu
					tlMenu.set($(".animated_menu"), { y: 80, opacity: 0 });
					// Iterates through all elements with .animated_menu class
					$(".animated_menu").each(function (index, element) {
						// Animates and manipulates properties of each .animated_menu element
						tlMenu.to(
							element,
							0.5,
							{
								y: 0,
								opacity: 1,
								delay: 0.4,
								ease: Power2.easeOut,
							},
							index * 0.1
						);
					});
				} else {
					// Creates an instance of TimelineLite
					var tlMenu = new TimelineLite();
					// Iterates through all elements with .animated_menu class
					$(".animated_menu").each(function (index, element) {
						// Animates and manipulates properties of each .animated_menu element
						tlMenu.to(
							element,
							0.25,
							{ y: -80, opacity: 0, ease: Power2.easeIn },
							index * 0.05
						);
					});
				}
			}, 20);
		});

		// Checks if any element with .menu_popup class is present
		if ($(".menu_popup").length > 0) {
			// Listens for click event on child anchor tags of li.menu-item-has-children within .menu_popup ul
			$(".menu_popup ul li.menu-item-has-children > a").on(
				"click",
				function (e) {
					// Prevents the default action of the event
					e.preventDefault();
					// Checks if the parent li of the clicked anchor has class active
					if ($(this).parent("li").hasClass("active")) {
						// If true, removes active class and slides up the ul.sub-menu next to the anchor
						$(this).parent("li").removeClass("active");
						$(this).next("ul.sub-menu").slideUp("slow");
					} else {
						// Slides up all the ul.sub-menus within li.menu-item-has-children
						$(".menu-item-has-children ul.sub-menu").slideUp(
							"slow"
						);
						// Removes active class from li.menu-item-has-children with active class
						$(".menu-item-has-children.active").removeClass(
							"active"
						);
						// Toggle active class on the parent li of the clicked anchor
						$(this).parent().toggleClass("active");
						// Toggles the sliding of ul.sub-menu next to the anchor
						$(this).next("ul.sub-menu").slideToggle("slow");
					}
				}
			);
		}

		// Listens for click event on element with id close_menu
		$("#close_menu").on("click", function () {
			// Creates an instance of TimelineLite
			var tlMenu = new TimelineLite();
			// Iterates through all elements with .animated_menu class
			$(".animated_menu").each(function (index, element) {
				// Animates and manipulates properties of each .animated_menu element
				tlMenu.to(
					element,
					0.25,
					{ y: -80, opacity: 0, ease: Power2.easeIn },
					index * 0.05
				);
			});
			// Slides up all ul.sub-menus within .popup_menu and performs a callback function on complete
			$(".popup_menu ul.sub-menu").slideUp("slow", function () {
				// Removes the active class from li.menu-item-has-children with active class
				$(".menu-item-has-children.active").removeClass("active");
				// Removes active class from .popup_menu
				$(".popup_menu").removeClass("active");
			});
			// Delays the following code execution for 500 milliseconds
			setTimeout(function () {
				// Fades out the .popup_menu
				$(".popup_menu").fadeOut();
			}, 500);
		});
	}, []);

	return (
		<header className="header-01 fix-header">
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
								{/* <li className="active menu-item-has-children">
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
								</li> */}
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
										{ to: "/", content: "Shop Fullwidth" },
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
