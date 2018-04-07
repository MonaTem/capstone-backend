
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/capstone_stories'
  }

};





// var dotenv = require('dotenv').config();


/*if (process.env.APP_MODE === undefined) {
 throw Error('APP_MODE not set in application environment');
}
*/

//
// module.exports = {
//   development: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL
//   },
//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL
//   }
// };
