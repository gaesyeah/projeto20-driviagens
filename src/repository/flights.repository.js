import { db } from "../database/database.connection.js";

const create = ({ origin, destination, date }) => {
  return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'));`
  , [origin, destination, date]);
};

const read = (origin, destination, biggerDate, smallerDate) => {
  let queryString = '';
  const params = [];

  if (origin) {
    queryString += `WHERE origin.name = $1`;
    params.push(origin);
  };
  if (destination) {
    queryString += `${origin ? ' AND' : ' WHERE'} destination.name = ${origin ? '$2' : '$1'}`;
    params.push(destination);
  };
  if (biggerDate || smallerDate) {
    queryString += `
      ${origin || destination ? ' AND' : ' WHERE'} 
      flights.date BETWEEN ${
        (origin && destination) ? "$3 AND $4" : 
        (destination || origin) ? "$2 AND $3" : 
        "$1 AND $2"
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
    ORDER BY flights.date;`,
      params
  );
};

const flightsRepository = { create, read };
export default flightsRepository;
