import React, { useContext, useEffect } from "react";
import SingleCard from "../component/SingleCard";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";

export const Home = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<p className="fs-1 text-blue d-flex justify-content-center">People</p>
				</div>
			</div>
			<div className="row-card">
				{store.people.map(item => {
					return <SingleCard key={item.uid} item={item} seccion="people" />;
				})}
			</div>

			<div className="row">
				<div className="col-12">
					<p className="fs-1 text-blue d-flex justify-content-center">Planets</p>
				</div>
			</div>
			<div className="row-card">
				{store.planets.map(item => {
					return <SingleCard key={item.uid} item={item} seccion="planets" />;
				})}
			</div>

			<div className="row">
				<div className="col-12">
					<p className="fs-1 text-blue d-flex justify-content-center">Vehicles</p>
				</div>
			</div>
			<div className="row-card">
				{store.vehicles.map(item => {
					return <SingleCard key={item.uid} item={item} seccion="vehicles" />;
				})}
			</div>
		</div>
	);
};
