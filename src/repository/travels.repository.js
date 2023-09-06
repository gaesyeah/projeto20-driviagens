import { db } from "../database/database.connection.js";

const create = ({	passengerId, flightId}) => {
  return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`
  , [passengerId, flightId]);
};

const read = ({ name }) => {
  let queryString = '';
  if (name) queryString = `WHERE passengers."firstName" ILIKE '%${name}%' OR passengers."secondName" ILIKE '%${name}%'`;
  return db.query(
    `SELECT 
      CONCAT(passengers."firstName", ' ', passengers."secondName") AS passenger, 
      COUNT(flights.id) AS travels
    FROM travels
      JOIN passengers ON travels."passengerId" = passengers.id
      JOIN flights ON travels."flightId" = flights.id
    ${queryString}
      GROUP BY passengers.id
      ORDER BY travels DESC, passengers.id;`
  );
};

const travelsRepository = { create, read };
export default travelsRepository;
