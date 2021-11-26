import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/index.scss";

const SingleCard = ({ item, seccion }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<div className="d-flex justify-content-between">
					<Link to={`/${seccion}/${item.uid}`} seccion="button" className="btn btn-outline-primary">
						See more!
					</Link>
					<i
						className="fas fa-heart fs-2 text-warning corazon"
						onClick={() => {
							actions.addFavItem(item.name, seccion);
						}}
					/>
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
