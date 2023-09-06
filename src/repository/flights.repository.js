import { db } from "../database/database.connection.js";

const create = ({ origin, destination, date }) => {
  return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'));`
  , [origin, destination, date]);
};

const read = (query) => {
  const { origin, destination, 'bigger-date': biggerDate, 'smaller-date': smallerDate } = query;
  console.log(origin, destination, biggerDate, smallerDate);
  
  return db.query(
    `SELECT 
      flights.id, 
      origin.name AS origin, 
      destination.name AS destination,
      TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
    FROM flights
      JOIN cities AS origin ON flights.origin = origin.id
      JOIN cities AS destination ON flights.destination = destination.id
    ORDER BY date;`
  );
};

const flightsRepository = { create, read };
export default flightsRepository;
