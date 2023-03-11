import nodemailer from "nodemailer";
import envConfig from "../src/config/env.config.js";

const config = {
	host: envConfig.EMAIL_HOST,
	port: envConfig.EMAIL_PORT,
	secure: envConfig.EMAIL_SECURE,
	auth: {
		user: envConfig.EMAIL_USER_CREDENTIAL,
		pass: envConfig.EMAIL_PASSWORD_CREDENTIAL,
	},
};

console.log(config);

export default nodemailer.createTransport(config);
