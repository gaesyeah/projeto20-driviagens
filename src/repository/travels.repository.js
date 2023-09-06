import { db } from "../database/database.connection.js";

const create = ({	passengerId, flightId}) => {
  return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`
  , [passengerId, flightId]);
};

const read = ({ name, page }) => {
  const qtd = 10;
  let queryString = '';
  const params = [];

  if (page) {
    params.push((page - 1) * qtd);
  }
  if (name) {
    queryString = `WHERE passengers."firstName" ILIKE ${!page ? '$1' : '$2'} OR passengers."secondName" ILIKE ${!page ? '$1' : '$2'}`;
    params.push(`%${name}%`);
  };

  return db.query(
    `SELECT 
      CONCAT(passengers."firstName", ' ', passengers."secondName") AS passenger, 
      COUNT(flights.id) AS travels
    FROM travels
      JOIN passengers ON travels."passengerId" = passengers.id
      JOIN flights ON travels."flightId" = flights.id
    ${queryString}
      GROUP BY passengers.id
      ORDER BY travels DESC, passengers.id
    ${page ? `LIMIT ${qtd} OFFSET $1` : ''};`
      ,params
  );
};

const travelsRepository = { create, read };
export default travelsRepository;
