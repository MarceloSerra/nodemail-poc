import express from "express";

const router = express.Router();

router.use((req, res, next) => {
	console.log(`[TIME]${new Date()}`);
	next();
});

router.get("/", (req, res) => {
	res.send({ response: "ok" });
});

export default router;
