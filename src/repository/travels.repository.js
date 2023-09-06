import { db } from "../database/database.connection.js";

const create = ({	passengerId, flightId}) => {
  return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`
  , [passengerId, flightId]);
};

const travelsRepository = { create };
export default travelsRepository;
