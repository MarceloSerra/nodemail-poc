import { EmailTemplate } from "../template/email/email.template.js";

export default class EmailService {
	#transporter;

	constructor(transporter) {
		this.#transporter = transporter;
	}

	async send(
		args = {
			to: "",
			subject: "NODEMAILER TEST",
			text: "NODEMAILER EMAIL",
			html: EmailTemplate.html,
		}
	) {
		this.#transporter.sendMail(
			{
				from: process.env.EMAIL_USER_CREDENTIAL,
				...args,
			},
			(err, info) => {
				console.log({ err, info });
			}
		);
	}
}
