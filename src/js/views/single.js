import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SingleCard from "../component/SingleCard.js";

const Single = () => {
	const { store, actions } = useContext(Context);
	const { id, seccion } = useParams();
	const [single, setSingle] = useState({});

	useEffect(() => {
		if (id) {
			for (let arr in store) {
				if (arr === seccion) {
					let newItem = store[seccion].find(item => {
						return item.uid == id;
					});
					setSingle(newItem);
				}
			}
		}
	}, []);

	return (
		<div className="container">
			<div className="uniqueElement">
				<h1>{`some text about ${single.name}`}</h1>
				<Link to="/" type="button" className="btn btn-outline-info">
					Back home
				</Link>
			</div>
		</div>
	);
};

export default Single;
