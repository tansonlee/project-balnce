import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSchool } from "../../actions/schools";

import FileBase from "react-file-base64";

import "./NewSchoolPage.css";

const NewSchoolPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const emptySchool = {
		name: "",
		about: "",
		location: "",
		admissions: "",
		image: "",
	};

	const [formData, setFormData] = useState(emptySchool);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(createSchool({ ...formData }));
		setFormData(emptySchool);

		history.push("/");
	};

	return (
		<div className="newschool-wrapper">
			<form onSubmit={handleSubmit}>
				{/* name */}
				<p className="prompt">Name:</p>
				<input
					className="input"
					required
					name="name"
					type="text"
					placeholder="Alice's Daycare . . ."
					onChange={e => setFormData({ ...formData, name: e.target.value })}
					value={formData.name}
				/>
				{/* about */}
				<p className="prompt">About:</p>
				<textarea
					className="input"
					name="about"
					type="text"
					placeholder="About . . ."
					onChange={e => setFormData({ ...formData, about: e.target.value })}
					value={formData.about}
				></textarea>
				{/* location */}
				<p className="prompt">Location:</p>
				<textarea
					className="input"
					name="location"
					type="text"
					placeholder="Location . . ."
					onChange={e => setFormData({ ...formData, location: e.target.value })}
					value={formData.location}
				></textarea>
				{/* admission */}
				<p className="prompt">Admissions:</p>
				<textarea
					className="input"
					name="admission"
					type="text"
					placeholder="Admission . . ."
					onChange={e => setFormData({ ...formData, admissions: e.target.value })}
					value={formData.admissions}
				></textarea>
				{/* image */}
				<p className="prompt">Image:</p>
				<div>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
					/>
				</div>
				{/* submit */}
				<div className="form-action">
					<button className="small-button" id="submit" type="submit">
						Create School
					</button>
					<Link type="button" className="small-button" id="cancel" to="/">
						Cancel
					</Link>
				</div>
			</form>
		</div>
	);
};

export default NewSchoolPage;
