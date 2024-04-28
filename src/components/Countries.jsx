import { Link } from "react-router-dom";

function Countries({
	numericCodes,
	name,
	region,
	population,
	capital,
	flag,
	darkMode
}) {
	return (
		<>
			<Link to={`/${name}`}>
				<article key={numericCodes} className={`${darkMode ? "cards" : ""}`}>
					{" "}
					<div className="flag">
						<img src={flag} alt={name} />
					</div>
					<div className="details">
						<h3 className={` ${darkMode ? "card-text" : ""}`}>{name}</h3>
						<p className={` ${darkMode ? "card-text" : ""}`}>
							population: <span> {population}</span>
						</p>
						<p className={` ${darkMode ? "card-text" : ""}`}>
							Capital: <span> {capital}</span>
						</p>
						<p className={` ${darkMode ? "card-text" : ""}`}>
							Region: <span> {region}</span>
						</p>
					</div>
				</article>
			</Link>
		</>
	);
}

export default Countries;
