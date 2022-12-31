require('dotenv').config();

const express = require("express");
const cors = require("cors");
const logger = require('morgan');

const app = express();
require('./config/db.config.js');

app.use(express.json());
app.use(logger('dev'));
// Não esquecer de criar variável de ambiente com o endereço do seu app React (local ou deployado no Netlify)
app.use(cors({ origin: process.env.REACT_APP_URL }));



const userRouter = require("./routes/user.routes");
app.use("/api", userRouter);

//Configuração de erro
require('./error-handling/index.js')



app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);
