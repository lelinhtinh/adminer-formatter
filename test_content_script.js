const assert = require('assert');
const sqlFormatter = require('./libs/sql-formatter.min.js');

const query = 'select * from users;';
const dbDriver = 'mysql';

const formatted = sqlFormatter.format(query, {
  language: dbDriver,
  keywordCase: 'upper',
  dataTypeCase: 'upper',
  functionCase: 'upper',
  identifierCase: 'lower',
});
console.log(formatted);
