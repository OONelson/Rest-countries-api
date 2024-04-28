import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
function Header({ onClick, toggleName }) {
	return (
		<header>
			<h1>Where in the world?</h1>
			<div className="toggle-container" onClick={onClick}>
				<FontAwesomeIcon icon={faMoon} fill="#fff" fontSize={20} />
				<span>{toggleName}</span>
			</div>
		</header>
	);
}

export default Header;
