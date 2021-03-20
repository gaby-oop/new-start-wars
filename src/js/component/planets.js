import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { actions } = useContext(Context);
	return (
		<div className="container">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://s2.best-wallpaper.net/wallpaper/1680x1050/1307/Beautiful-planets-stars-galaxies_1680x1050.jpg"
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
						<Link onClick={() => actions.addFavorite(props.name, "planets")}>
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
Planets.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	id: PropTypes.number
};
