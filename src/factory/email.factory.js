import transporter from "../../lib/nodemailer.lib.js";
import EmailService from "../service/email.service.js";

export default class EmailFactory {
	static init() {
		const service = new EmailService(transporter);
		return { service };
	}
}
