import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

const SingleCard = ({ item, seccion }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-4">
			<div className="card">
				<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>
					<div className="d-flex justify-content-between">
						<a href={item.url} className="btn btn-primary">
							See more
						</a>
						<i
							className="fas fa-heart fs-2 text-danger"
							onClick={() => {
								actions.addFavItem(item.name, seccion);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCard;

SingleCard.propTypes = {
	item: PropTypes.object,
	seccion: PropTypes.string
};
