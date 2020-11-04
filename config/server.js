import express from "express";
import bodyParser from "body-parser";
const server = express();
var cors = require('cors')

server.use(cors())

server.use(bodyParser.json());

import setRoutes from "./routes";
setRoutes(server);

export default server;
