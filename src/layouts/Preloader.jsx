// Importing React hook: useEffect
import { useEffect } from "react";

// Importing JQuery
import $ from "jquery";

export default function Preloader() {
	// Using 'useEffect()' hook
	useEffect(() => {
		// Attaching 'load' event on window object
		$(window).on("load", function (event) {
			// Apply delay and fadeOut to an element with id 'preloader' when window loads
			$("#preloader").delay(800).fadeOut(500);
		});
	}, []); // Passing empty array to useEffect so it runs only once after initial render

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
