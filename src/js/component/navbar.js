// yo necesito(yo importo, yo hago el import) React y use state desde el modulo  o librería react
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";
import logoStarWars from "../../img/star-wars.png";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from "reactstrap";

export const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src={logoStarWars} height="60" />
				</Link>
				<Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle caret>Favoritos</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>Personajes</DropdownItem>
						{/* en el objeto store, llamamos al array favorites que tiene almacenado mis favoritos
                le haremos un map para  obtener cada uno de sus valores cada valor estará determinado por "fav" 
                y cada iteración por la letra "i" retornando un div que nos liste los favoritos*/}
						{store.favorites.map((fav, i) => {
							if (fav.type == "people") {
								return (
									<div key={i}>
										<dropdownItem>{fav.name}</dropdownItem>
									</div>
								);
							}
						})}
						<DropdownItem divider />
						<DropdownItem>Planetas</DropdownItem>
						{store.favorites.map((fav, i) => {
							if (fav.type == "planets") {
								return (
									<div key={i}>
										<dropdownItem>{fav.name}</dropdownItem>
									</div>
								);
							}
						})}
					</DropdownMenu>
				</Dropdown>
			</div>
		</nav>
	);
};
