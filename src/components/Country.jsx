

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Country({ darkMode }) {
	const [country, setCountry] = useState([]);
	const { name } = useParams();
	const nameUrl = `https://restcountries.com/v3.1/name/${name}`;

	const fetchCountry = async () => {
		const response = await axios.get(nameUrl);
		console.log(response.data);
		const country = response.data;
		setCountry(country);
	};
	useEffect(() => {
		fetchCountry();
	}, [name]);

	return (
		<>
			<section className={`country-section ${darkMode ? "dark-mode" : ""}`}>
				<Link to="/">
					<div
						className={`btn-container ${
							darkMode ? "top-header-dark-mode" : ""
						}`}
					>
						<FontAwesomeIcon icon={faArrowLeft} />
						<span>Back</span>
					</div>
				</Link>

				{country.map((country) => {
					const {
						name,
						region,
						population,
						capital,
						subregion,
						flags,
						tld,
						currencies,
						languages,
						borders,
						numeriCode
					} = country;

					return (
						<div
							key={numeriCode}
							className={`country ${darkMode ? "dark-mode" : ""}`}
						>
							<article>
								<img src={flags.png} alt={name} />
							</article>
							<article className="country-details">
								<h2>{name.official}</h2>
								<div className="details-container">
									<ul>
										{/* <li>
											{Object.values(nativeName).map((nativeName) => (
												<li key={official}>
													Native Name:
													<span>({nativeName.official})</span>
												</li>
											))}
											||
											{Object.values(nativeName).map((nativeName) => (
												<li key={official}>
													Native Name:
													<span>({nativeName.common})</span>
												</li>
											))} */}
										{/* </li> */}
										{/* <li>
											Population: <span>{population.toLocaleString()}</span>
										</li> */}
										<li>
											Region: <span>{region}</span>
										</li>
										<li>
											Sub Region: <span>{subregion}</span>
										</li>
										<li>
											Capital: <span>{capital}</span>
										</li>
									</ul>

									<ul className="second">
										<li>
											Top Level Domian: <span>{tld}</span>
										</li>
										<li>
											Currencies:{" "}
											<span>
												{Object.values(currencies).map(
													(currency) => currency.name
												)}
												,
												{Object.values(currencies).map(
													(currency) => currency.symbol
												)}
											</span>
										</li>
										<li>
											Languages:{" "}
											<span>{Object.values(languages).join(", ")}</span>
										</li>
									</ul>
								</div>
								{country.borders && (
									<>
										<h4>Borders Countries:</h4>
										<ol>
											{borders.map((border, index) => (
												<li
													className={`${darkMode ? "cards" : ""}`}
													key={index}
												>
													{border}
												</li>
											))}
										</ol>
									</>
								)}
							</article>
						</div>
					);
				})}
			</section>
		</>
	);
}

export default Country;
