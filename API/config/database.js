// config/database.js
let host = 'myportfolio.cvanfsylbujq.eu-west-2.rds.amazonaws.com',
    port = '3306',
    user = 'root';
    password = 'sragia26365222';
    database = 'wwwajtec_ajtechlab';


module.exports = {
    'connection': {
        'host': host,
        'port': port,
        'user': user,
        'password': password
    },
	'database': database,
    'users_table': 'users',


    Form_connectionString : {
        host: host,
        user: user,
        password: password,
        database: database,
        multipleStatements: false
    },
    Passport_connectionString : {
        host: host,
        port: port,
        user: user,
        password: password,
        database: database,
        user_table: 'users',
        multipleStatements:false
    }
};




