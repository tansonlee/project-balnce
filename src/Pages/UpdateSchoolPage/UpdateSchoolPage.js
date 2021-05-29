import React, { useState } from "react";
import "./UpdateSchoolPage.css";
import { Link } from "react-router-dom";

import { updateSchool } from "../../actions/schools";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import FileBase from "react-file-base64";

const UpdateSchoolPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const currentSchool = useSelector(state => state.currentSchool);
	const [formData, setFormData] = useState(currentSchool);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(updateSchool({ ...formData }));

		history.push("/");
	};

	return (
		<div className="updateschool-wrapper">
			<form onSubmit={handleSubmit}>
				{/* name */}
				<p className="prompt">School Name</p>
				<input
					className="input"
					required
					name="name"
					type="text"
					placeholder="School . . ."
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
					placeholder="location . . ."
					onChange={e => setFormData({ ...formData, location: e.target.value })}
					value={formData.location}
				></textarea>
				{/* admission */}
				<p className="prompt">Admissions:</p>
				<textarea
					className="input"
					name="admission"
					type="text"
					placeholder="admission . . ."
					onChange={e => setFormData({ ...formData, admissions: e.target.value })}
					value={formData.admissions}
				></textarea>
				{/* image */}
				<div>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
					/>
				</div>
				{/* submit */}
				<div className="form-action">
					<button className="small-button" type="submit" id="submit">
						Update School
					</button>
					<Link type="button" id="cancel" className="small-button" to="/">
						Cancel
					</Link>
				</div>
			</form>
		</div>
	);
};

export default UpdateSchoolPage;
