import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Planetas = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img
						src="https://i1.wp.com/elpodio.news/wp-content/uploads/2020/05/universo-paralelo.jpg?fit=800%2C510&ssl=1"
						style={{ width: "100%" }}
					/>
				</div>
				<div className="col-md-6">
					<div>
						<h2>{store.planets[params.theid].name}</h2>
					</div>
					<div>
						<p>
							On the other hand, we denounce with righteous indignation and dislike men who are so
							beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that
							they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
							those who fail in their duty through weakness of will, which is the same as saying through
							shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
						</p>
					</div>
				</div>
			</div>
			<hr />
			<div className="row mb-4">
				<div className="col-md-2">
					<h5 className="text-center">Name</h5>
					<p className="text-center">{store.planets[params.theid].name}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Climate</h5>
					<p className="text-center">{store.planets[params.theid].climate}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Population</h5>
					<p className="text-center">{store.planets[params.theid].population}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Orbital Period</h5>
					<p className="text-center">{store.planets[params.theid].orbital_period}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Rotation Period</h5>
					<p className="text-center">{store.peoples[params.theid].rotation_period}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Diameter</h5>
					<p className="text-center">{store.planets[params.theid].diameter}</p>
				</div>
			</div>
			<div className="">
				<Link to="/">Volver</Link>
			</div>
		</div>
	);
};
