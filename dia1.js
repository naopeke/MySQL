const mysql = require('mysql2/promise');
    let connection;
async function main(){
    try{
        connection = await mysql.createConnection(
            {
                host : 'localhost',
                user : 'root',
                password:'MySQL',
                database:'dia1'
            }
        );
        console.log('Connection OK')
    }
    catch(err){
        console.log(err);
        await connection.end();
    }
}

main();

