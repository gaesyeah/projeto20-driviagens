import { db } from "../database/database.connection.js";

const create = (body) => {
  const { name } = body;
  return db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
};

const citiesRepository = { create };
export default citiesRepository;