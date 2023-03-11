import dotenv from "dotenv";

const envConfig = {
	get: () => {
		dotenv.config();

		const {
			API_PORT,
			EMAIL_HOST,
			EMAIL_PORT,
			EMAIL_SECURE,
			EMAIL_USER_CREDENTIAL,
			EMAIL_PASSWORD_CREDENTIAL,
		} = process.env;

		return {
			API_PORT,
			EMAIL_HOST,
			EMAIL_PORT,
			EMAIL_SECURE,
			EMAIL_USER_CREDENTIAL,
			EMAIL_PASSWORD_CREDENTIAL,
		};
	},
};

export default envConfig.get();
