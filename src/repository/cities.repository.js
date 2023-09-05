import { db } from "../database/database.js";

const insertCity = (body) => {
  const { name } = body;
  return db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
};

const citiesRepository = { insertCity };
export default citiesRepository;