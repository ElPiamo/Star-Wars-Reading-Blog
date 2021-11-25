const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLbase: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getData: async endpoint => {
				const store = getStore();
				try {
					let response = await fetch(`${store.URLbase}/${endpoint}`);
					let body = await response.json();
					if (response.ok) {
						setStore({ ...store, [endpoint]: body.results });
					}
				} catch (error) {
					console.log(error);
				}
			},

			addFavItem: (anything, seccion) => {
				let store = getStore();
				let exist = store.favorites.find(element => {
					return element.name == anything;
				});
				if (!exist) {
					if (seccion == "people") {
						let found = store.people.find(item => {
							return item.name == anything;
						});
						setStore({ ...store, favorites: [...store.favorites, found] });
					} else if (seccion == "planets") {
						let found = store.planets.find(item => {
							return item.name == anything;
						});
						setStore({ ...store, favorites: [...store.favorites, found] });
					} else {
						let found = store.vehicles.find(item => {
							return item.name == anything;
						});
						setStore({ ...store, favorites: [...store.favorites, found] });
					}
				}
			} //,

			// deleteFavItem: nametodelete => {
			// 	const store = getStore();
			// 	const newFavs = store.favorites.filter(item => {
			// 		return nametodelete !== item.name;
			// 	});
			// 	setStore({
			// 		...store,
			// 		favorites: newFavs
			// 	});
			// }
		} // cierre de actions
	};
};

export default getState;
