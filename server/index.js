import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import routes from './routers/index.js';
import errorHandler from './common/errorHandler.js';
import bodyParser from 'body-parser';
import path from "path"
import { fileURLToPath } from 'url';
import { metaUrl } from './common/metaUrl.js'
dotenv.config();

const app = new express();
app.use(
  morgan(
    '[:date[iso]] :method :url :status :response-time ms',
  ),
);
app.use(routes);
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(errorHandler)

const __filename = fileURLToPath(metaUrl());
const __dirname = path.dirname(__filename);
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 3001;
http.createServer(app)
  .listen(port, () => {
    console.info(`Server is runing at port ${port}`);
  });

export default app;