import express from "express";
import providers from "../provider/context.provider.js";

const { email } = providers;

const router = express.Router();

router.use((_, __, next) => {
	console.log(`[TIME]${new Date()}`);
	next();
});

router.get("/healthcheck", (req, res) => {
	res.send({ statusCode: 200, message: "API working!" });
});

router.post("/email/send", async (req, res) => {
	console.log(req.body);
	const { to, subject, text, html } = req.body;

	const response = await email.service.send({ to, text, html, subject });

	res.send(response);
});

export default router;
