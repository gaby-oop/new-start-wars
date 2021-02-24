import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
//import button from "../component/button";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://www.mural-wallpaper.com/wp-content/uploads/2020/11/UN-DIS74.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						<strong>Gender: &nbsp;</strong> {props.gender}
						<br />
						<strong>Color eyes: &nbsp;</strong> {props.colorEyes}
						<br />
						<strong>Color hair: &nbsp;</strong> {props.colorHair}
					</p>
					<div className="d-flex justify-content-between">
						<Link to={`/persona/${props.id}`}>
							<button type="button" className="btn btn-outline-primary">
								Learn More!
							</button>
						</Link>
						<Link onClick={() => actions.addFavorite(props.name, "people")}>
							<button type="button" className="btn btn-outline-warning">
								{<i className="fas fa-heart" />}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
People.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	colorEyes: PropTypes.string,
	colorHair: PropTypes.string,
	id: PropTypes.number
};
