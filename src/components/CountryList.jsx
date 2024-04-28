import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import Countries from "./Countries";

function CountryList({ darkMode }) {
	const regions = [
		{
			value: "Filter By region",
			label: "Filter By region",
			default: true
		},
		{
			value: "Africa",
			label: "Africa"
		},
		{
			value: "America",
			label: "America"
		},
		{
			value: "Asia",
			label: "Asia"
		},
		{
			value: "Europe",
			label: "Europe"
		},
		{
			value: "Oceania",
			label: "Oceania"
		}
	];

	const url = "https://restcountries.com/v2/all ";

	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		const fetchCountryList = async () => {
			const response = await axios.get(url);
			console.log(response.data);
			const countries = response.data;
			setCountries(countries);
			setIsLoading(false);
		};
		fetchCountryList();
	}, []);

	const searchCountry = async () => {
		const res = await axios.get(
			`https://restcountries.com/v3.1/name/${searchInput}`
		);
		console.log(res.data);
		const data = res.data;
		setCountries(data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		searchCountry();
	};

	return (
		<>
			<main className={`main ${darkMode ? "dark-mode" : ""}`}>
				<div className="container">
					<form className="subHeader" onSubmit={handleSubmit}>
						<input
							type="text"
							className={`${darkMode ? "subHeader" : ""}`}
							placeholder="Search for a country..."
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
						/>
					</form>

					<select
						className={`select ${darkMode ? "subHeader" : ""}`}
						style={{
							padding: "1rem 2rem",
							border: "none",
							outline: "none",
							color: "hsl(0, 0%, 52%)",
							borderRadius: ".3rem",
							boxShadow: "0 3px 7px hsla(200, 15%, 8%, 0.1)",
							fontWeight: "500",
							fontSize: "1.5rem"
						}}
						value={regions.label}
					>
						{regions.map((region) => (
							<option
								className={`select ${darkMode ? "subHeader" : ""}`}
								style={{ color: "hsl(0, 0%, 52%)" }}
								key={region.value}
								value={region.default}
							>
								{region.label}
							</option>
						))}
					</select>
				</div>
				<>
					{isLoading ? (
						<div className="spinner">
							<SpinnerCircular
								size={70}
								color="#1a1a2d"
								secondaryColor="#fff"
							/>
						</div>
					) : (
						<section className="grid">
							{countries.map((country, index) => (
								<Countries key={index} darkMode={darkMode} {...country} />
							))}
						</section>
					)}
				</>
			</main>
		</>
	);
}

export default CountryList;
