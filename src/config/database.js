import { Sequelize } from 'sequelize';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT || 'sqlite',
  storage: process.env.DB_STORAGE || path.join(__dirname, '..', '..', 'database.sqlite'),
  logging: false,
});

export default sequelize;