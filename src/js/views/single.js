import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Single = () => {
	const { store, actions } = useContext(Context);
	const { id, seccion } = useParams();

	useEffect(() => {
		actions.getIndInfo(id, seccion);
	}, []);

	return (
		<div className="container first-row">
			<div className="uniqueElement">
				{store.singleInfo.name ? <h1>Name: {store.singleInfo.name} </h1> : null}
				{store.singleInfo.birth_year ? <h1>Date of Birth: {store.singleInfo.birth_year} </h1> : null}
				{store.singleInfo.population ? <h1>Population: {store.singleInfo.population} </h1> : null}
				<Link to="/" type="button" className="btn btn-outline-info">
					Back home
				</Link>
			</div>
		</div>
	);
};

export default Single;
