import React, { useState, createContext } from 'react';
// import { printC } from "../helpers/basics";

//crear el context
export const UserContext = createContext();

//provider es donde se encuentran las funciones y los state
const UserProvider = (props) => {
	const [user, updateUser] = useState({});

	//   useEffect(() => {
	//     const consultarApis = async () => {
	//       const urlCategorias = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
	//       const [resultadoCategorias] = await Promise.all([Axios(urlCategorias)]);
	//       updateCategorias(resultadoCategorias.data.drinks);
	//     };
	//     consultarApis();
	//   }, []);

	return (
		<UserContext.Provider
			value={{
				user,
				updateUser
			}}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
