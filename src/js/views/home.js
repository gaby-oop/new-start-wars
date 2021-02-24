//import "../../styles/home.scss";
import React, { useState, useEffect, setState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";
import { People } from "/workspace/react-hello-webapp/src/js/component/people.js";
import { Planets } from "/workspace/react-hello-webapp/src/js/component/planets.js";
//mport PropTypes from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeoples();
		actions.loadPlanets();
	}, []);
	//console.log(store.peoples);

	return (
		<div className="container">
			<h1 className="text-daner">Personajes</h1>
			<div className="align-items-center text-center mt5">
				<div className="d-flex flex-row p-4" style={{ overflow: "auto" }}>
					<div className="row">
						<div className="d-flex">
							{store.peoples.map((people, i) => {
								return (
									<div key={i}>
										<People
											name={people.name}
											gender={people.gender}
											colorEyes={people.eye_color}
											colorHair={people.hair_color}
											id={i}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<h1 className="text-daner">Planets</h1>
			<div className="align-items-center text-center mt5">
				<div className="d-flex flex-row p-4" style={{ overflow: "auto" }}>
					<div className="row">
						<div className="d-flex">
							{store.planets.map((planets, i) => {
								return (
									<div key={i}>
										<Planets
											name={planets.name}
											population={planets.population}
											terrain={planets.terrain}
											id={i}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
