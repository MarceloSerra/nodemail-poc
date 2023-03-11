import bodyParser from "body-parser";
import express from "express";

import router from "./src/router/router.js";
import envConfig from "./src/config/env.config.js";

const app = express();
const port = envConfig.API_PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/v1", router);

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});
