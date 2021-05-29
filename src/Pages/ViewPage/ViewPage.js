import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ViewPage.css";

const ViewPage = () => {
	const currentSchool = useSelector(state => state.currentSchool);
	const { name, about, location, admissions, image } = currentSchool;
	return (
		<div className="viewpage-wrapper">
			<Link to="/" className="small-button">
				Back
			</Link>
			<h2>{name}</h2>
			<img src={image} alt="school" />

			<div>
				<h3>About:</h3>
				<p>{about}</p>
			</div>

			<div>
				<h3>Location:</h3>
				<p>{location}</p>
			</div>

			<div>
				<h3>Admissions:</h3>
				<p>{admissions}</p>
			</div>
		</div>
	);
};

export default ViewPage;
