import axios from "axios";
import API_ROUTES from "../../../routes/apiRoutes";

const login = async (credentials) => {

  const dataToLogin = {
		email: credentials.email,
		password: credentials.password,
	}

	try {
		const response = await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:KAEwqeq2${API_ROUTES.LOGIN}`, dataToLogin);

	if ( response ) {
		const user = { email: credentials.email,  authToken: response.data.authToken};
		return user
	}

	return null;
	} catch (error) {
		console.log(error)
		// throw Error(error)
	}
}

export default login;