import * as React from "react";
import * as express from "express";
import * as compression from "compression";

import { renderApp } from "./render-app";
import {WEB_PORT, STATIC_PATH} from "./shared/config";

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static("dist"));
app.use(STATIC_PATH, express.static("public"));

app.get("*", (req, res) => {
    res.send(renderApp());
});

const listener = app.listen(WEB_PORT, () => {
    console.log(`Server listening on port ${listener.address().port}`)
});
