import React from "react";
import "./School.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeCurrentSchool } from "../../../actions/currentSchool";

import { deleteSchool, getAllSchools } from "../../../actions/schools";

const School = school => {
	const dispatch = useDispatch();
	console.log(school);
	const { name, about, location, admissions, image, _id } = school;

	const handleDelete = () => {
		dispatch(deleteSchool(_id));
		dispatch(getAllSchools());
	};

	return (
		<div className="school-wrapper">
			{image && <img src={image} alt="school" />}
			<div>
				{name && <p className="name">{name}</p>}
				{location && <p className="location">Location: {location}</p>}
				{admissions && <p className="admissions">Admissions: {admissions}</p>}
				{about && <p className="about">{about}</p>}
			</div>
			<div className="buttons">
				<Link
					to="/updateschool"
					className="small-button"
					onClick={() => {
						dispatch(changeCurrentSchool(school));
					}}
				>
					Edit
				</Link>
				<button className="small-button" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default School;
