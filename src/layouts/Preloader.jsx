import { useEffect } from "react";
import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from "./../../node_modules/jquery/dist/jquery";

export default function Preloader() {
	useEffect(() => {
		$(window).on("load", function (event) {
			$("#preloader").delay(800).fadeOut(500);
		});
	}, []);

	return (
		<div className="preloader" id="preloader">
			<div className="la-ball-scale-multiple la-2x">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
