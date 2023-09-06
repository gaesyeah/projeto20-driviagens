import { db } from "../database/database.connection.js";

const create = (body) => {
  const { firstName, lastName } = body;
  return db.query(`INSERT INTO passengers ("firstName", "secondName") VALUES ($1, $2);`, [firstName, lastName]);
};

const passengersRepository = { create };
export default passengersRepository;
