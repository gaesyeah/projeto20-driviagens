import { db } from "../database/database.connection.js";

const create = (body) => {
  const {origin, destination, date} = body;
  return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'));`
  , [origin, destination, date]);
};

const flightsRepository = { create };
export default flightsRepository;
