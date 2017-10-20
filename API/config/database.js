// config/database.js
let host = '139.59.164.147',
    user = 'AngularConnectALL',
    password = 'Parole123!';
    database = 'wwwajtec_ajtechlab';


module.exports = {
    'connection': {
        'host': host,
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
    }
};





