import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

import router from "./router/router.js";

dotenv.config();
const app = express();
const port = process.env.API_PORT || 8080;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
	console.log(`Server running at port: ${port}`);
});
