import Clients from "../layouts/Clients";
import Services from "../layouts/Services";
import Slider from "../layouts/Slider";

export default function Home() {
	return (
		<>
			<Slider />
			<Services />
            <Clients />
		</>
	);
}