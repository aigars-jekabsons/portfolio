// config/database.js
let host = 'www.ajtechlab.com',
    user = 'wwwajtec_ajtech',
    password = 'f0A%iv$R5kBh';
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
        database: database
    }
};



