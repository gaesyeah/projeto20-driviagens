import { db } from "../database/database.connection.js";

const create = ({ origin, destination, date }) => {
  return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'));`
  , [origin, destination, date]);
};

const read = (origin, destination, biggerDate, smallerDate, page) => {
  const qtd = 10;
  let queryString = '';
  const params = [];

  if (page) {
    params.push((page - 1) * qtd);
  }
  if (origin) {
    queryString += `WHERE origin.name = $${!page ? 1 : 2}`;
    params.push(origin);
  };
  if (destination) {
    queryString += `${origin ? ' AND' : ' WHERE'} destination.name = ${origin ? `$${!page ? 2 : 3}` : `$${!page ? 1 : 2}`}`;
    params.push(destination);
  };
  if (biggerDate || smallerDate) {
    queryString += `
      ${origin || destination ? ' AND' : ' WHERE'} 
      flights.date BETWEEN ${
        (origin && destination) ? `${!page ? '$3 AND $4' : '$4 AND $5'}` : 
        (destination || origin) ? `${!page ? '$2 AND $3' : '$3 AND $4'}` : 
        `${!page ? '$1 AND $2' : '$2 AND $3'}`
    }`
    params.push(smallerDate, biggerDate);
  };

  return db.query(
    `SELECT 
      flights.id, 
      origin.name AS origin, 
      destination.name AS destination,
      TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
    FROM flights
      JOIN cities AS origin ON flights.origin = origin.id
      JOIN cities AS destination ON flights.destination = destination.id
    ${queryString}
    ORDER BY flights.date
    ${page ? `LIMIT ${qtd} OFFSET $1` : ''};`
      , params
  );
};

const flightsRepository = { create, read };
export default flightsRepository;
