import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Person = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img
						src="https://specials-images.forbesimg.com/imageserve/5e160edc9318b800069388e8/960x0.jpg?fit=scale"
						style={{ width: "100%" }}
					/>
				</div>
				<div className="col-md-6">
					<div>
						<h2>{store.peoples[params.theid].name}</h2>
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
					<p className="text-center">{store.peoples[params.theid].name}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Birth</h5>
					<p className="text-center">{store.peoples[params.theid].birth_year}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Gender</h5>
					<p className="text-center">{store.peoples[params.theid].gender}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Height</h5>
					<p className="text-center">{store.peoples[params.theid].height}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Skin color</h5>
					<p className="text-center">{store.peoples[params.theid].skin_color}</p>
				</div>
				<div className="col-md-2">
					<h5 className="text-center">Eye color</h5>
					<p className="text-center">{store.peoples[params.theid].eye_color}</p>
				</div>
			</div>
			<div className="">
				<Link to="/">Volver</Link>
			</div>
		</div>
	);
};
