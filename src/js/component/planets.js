import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Planets = props => {
	return (
		<div className="container">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://www.mural-wallpaper.com/wp-content/uploads/2020/11/UN-DIS74.jpg"
					className="card-img-top"
					alt="..."
					style={{ width: "100%" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						<strong>Name: &nbsp;</strong> {props.name}
						<br />
						<strong>Population: &nbsp;</strong> {props.population}
						<br />
						<strong>Terrain: &nbsp;</strong> {props.terrain}
					</p>
					<div className="d-flex justify-content-between">
						<Link to={`/planet/${props.id}`}>
							<button type="button" className="btn btn-outline-primary">
								Learn More!
							</button>
						</Link>

						<button type="button" className="btn btn-outline-warning">
							{<i className="fas fa-heart" />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
Planets.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	id: PropTypes.number
};
