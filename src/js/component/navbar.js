import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "../../img/StarWarsLogo.jpg";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={StarWarsLogo} className="navbar-brand mb-0 h1" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className=" fs-3 btn btn-success dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites {` (${store.favorites.length})`}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map(favorite => {
							return (
								<li className="d-flex justify-content-between" key={favorite.name}>
									{favorite.name}
									<Link
										to={`/${favorite.name}/${favorite.uid}`}
										seccion="button"
										className="btn btn-outline-primary"
									/>
									<i
										className="far fa-trash-alt"
										onClick={() => {
											actions.deleteFavItem(favorite.name);
										}}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
