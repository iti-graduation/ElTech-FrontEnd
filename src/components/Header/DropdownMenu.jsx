// Importing DropdownItem component from local file
import DropdownItem from "./DropdownItem";

export default function DropdownMenu({ name, items, className }) {
	return (
		<li>
			<a href="javascript:void(0);">{name}</a>
			<ul className="sub-menu">
				{items.map((item, idx) => (
					<DropdownItem
						key={idx}
						to={item.to}
						content={item.content}
					/>
				))}
			</ul>
		</li>
	);
}
