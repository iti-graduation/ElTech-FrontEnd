import $ from "./../../node_modules/jquery/dist/jquery";
import { useEffect } from "react";

export default function PopUpSearch() {
	useEffect(() => {
		$(".search-toggles").on("click", function (e) {
			e.preventDefault();
			$(".popup-search-sec").toggleClass("active");
		});
		$(".search-closer").on("click", function () {
			$(".popup-search-sec").removeClass("active");
		});

		$(".scroll-down a").on("click", function () {
			$("html, body").animate(
				{ scrollTop: $(this.hash).offset().top - 68 },
				1000
			);
			return false;
		});
		$(".colse-popup").on("click", function (e) {
			e.preventDefault();
			$(".newsletter-popup").fadeOut("medium");
		});
	}, []);

	return (
		<section className="popup-search-sec">
			<div className="popup-search-overlay"></div>
			<div className="overlay-popup">
				<a href="javascript:void(0);" className="search-closer">
					x
				</a>
				<div className="middle-search">
					<div className="popup-search-form">
						<form method="get" action="#">
							<input
								type="search"
								name="s"
								id="s"
								placeholder="Search..."
							/>
							<button type="submit">
								<i className="twi-search"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
