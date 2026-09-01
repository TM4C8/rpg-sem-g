import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import ejs from 'ejs'
import path from 'path'
import { Sequelize } from 'sequelize'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.set("public engine", "ejs");
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.set("public", path.join(__dirname, "public"));
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync({force: true}).then(() =>{
    console.log(`Drop and Resync DB`);    
})


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});