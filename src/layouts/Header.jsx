import $ from "./../../node_modules/jquery/dist/jquery";
import { TimelineLite, Power2 } from "gsap/gsap-core";

import { useEffect } from "react";

import logo from "./../assets/images/logo.png";
import flag from "./../assets/images/flag.png";
import cart from "./../assets/images/cart.png";

export default function Header() {
	useEffect(() => {
		$(window).on("scroll", function () {
			if ($(window).scrollTop() > 40) {
				$(".fix-header").addclassName("sticky animated fadeIn");
			} else {
				$(".fix-header").removeclassName("sticky animated fadeIn");
			}
		});

		$(window).on("load resize", function (e) {
			if ($(window).width() < 991) {
				$(".mobile-btn a").on("click", function (e) {
					e.preventDefault();
					$(".mobile-menu > ul").stop(true, true).slideToggle();
				});
				$(".mobile-menu ul li.menu-item-has-children").each(
					function () {
						var $this = $(this);
						$this.append(
							'<span class="submenu-toggler"><i class="twi-caret-down"></i></span>'
						);
					}
				);
				$(
					".mobile-menu ul li.menu-item-has-children > span.submenu-toggler"
				).on("click", function () {
					var $this = $(this);

					if ($(this).hasClass("active-span")) {
						$("i", $this)
							.removeClass("twi-caret-up")
							.addClass("twi-caret-down");
					} else {
						$("i", $this)
							.addClass("twi-caret-up")
							.removeClass("twi-caret-down");
					}

					$(this).prev("ul.sub-menu").slideToggle();
					$(this).toggleClass("active-span");
				});
			}
		});

		$("#hamburger").on("click", function (e) {
			e.preventDefault();
			$(".popup_menu").addClass("active").fadeIn();
			setTimeout(function () {
				if ($(".popup_menu").hasClass("active")) {
					var tlMenu = new TimelineLite();
					tlMenu.set($(".animated_menu"), { y: 80, opacity: 0 });
					$(".animated_menu").each(function (index, element) {
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
					var tlMenu = new TimelineLite();
					$(".animated_menu").each(function (index, element) {
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

		if ($(".menu_popup").length > 0) {
			$(".menu_popup ul li.menu-item-has-children > a").on(
				"click",
				function (e) {
					e.preventDefault();
					if ($(this).parent("li").hasClass("active")) {
						$(this).parent("li").removeClass("active");
						$(this).next("ul.sub-menu").slideUp("slow");
					} else {
						$(".menu-item-has-children ul.sub-menu").slideUp(
							"slow"
						);
						$(".menu-item-has-children.active").removeClass(
							"active"
						);
						$(this).parent().toggleClass("active");
						$(this).next("ul.sub-menu").slideToggle("slow");
					}
				}
			);
		}

		$("#close_menu").on("click", function () {
			var tlMenu = new TimelineLite();
			$(".animated_menu").each(function (index, element) {
				tlMenu.to(
					element,
					0.25,
					{ y: -80, opacity: 0, ease: Power2.easeIn },
					index * 0.05
				);
			});
			$(".popup_menu ul.sub-menu").slideUp("slow", function () {
				$(".menu-item-has-children.active").removeClass("active");
				$(".popup_menu").removeClass("active");
			});
			setTimeout(function () {
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
							<a href="index.html">
								<img src={logo} alt="Goru" />
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
