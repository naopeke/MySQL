const mysql = require('mysql2/promise');
    let connection;
async function main(){
    try{
        connection = await mysql.createConnection(
            {
                host : 'localhost',
                user : 'root',
                password:'MySQL',
                database:'museum'
            }
        );
        console.log('Connection OK');


//! create table artifacts
// CREATE TABLE museum.artifacts (
// 	artifact_id INT auto_increment NOT NULL,
// 	title varchar(100) NOT NULL,
// 	description varchar(100) NOT NULL,
// 	`year` INT NOT NULL,
// 	artist_id INT NOT NULL,
// 	exhibition_id IN NOT NULL,
// 	CONSTRAINT artifacts_pk PRIMARY KEY (artifact_id)
// )

let sql1 = 'CREATE TABLE artifacts (artifact_id INT AUTO_INCREMENT PRIMARY KEY, ' +
                                'title VARCHAR(100) NOT NULL, '+
                                'description VARCHAR(100) NOT NULL, '+
								'year INT NOT NULL, '+
								'artist_id INT NOT NULL, '+
                                'exhibition_id INT NOT NULL)';
let [result1] = await connection.query(sql1);
console.log('created a table');
console.log(result1);

let insert1 = "INSERT INTO `artifacts` (title, description, year, artist_id, exhibition_id) VALUES ('Monna Lisa', 'portrait', 1519, 1, 4), ('Guernica', 'portrait', 1937, 2, 1),('Las Meninas', 'portrait', 1656, 3, 1), ('Sunflowers', 'flower painting', 1888, 4, 3), ('The Persistence of Memory', 'abstract art', 1931, 5, 5), ('The Night Watch', 'portrait', 1942, 6, 1), ('The Milkmaid', 'portrait', 1657, 7, 4), ('Water Lilies', 'landscape painting', 1926, 8, 5), ('Charles IV of Spain and His Family', 'portrait', 1801, 9, 4), ('The Birth of Venus', 'religious painting', 1486, 10, 3), ('Codex Leicester', 'book', 1510, 1, 2);";
let [insertResult1] = await connection.query(insert1);
console.log('insert1');
console.log(insertResult1);


//! create table artists 
// CREATE TABLE museum.artists (
// 	artist_id INT auto_increment NOT NULL,
// 	first_name varchar(100) NOT NULL,
// 	last_name varchar(100) NOT NULL,
// 	born_year INT NOT NULL,
// 	deceased_year INT NOT NULL,
// 	country varchar(100) NOT NULL,
// 	CONSTRAINT artists_pk PRIMARY KEY (artist_id)
// )

let sql2 = 'CREATE TABLE artists (artist_id INT AUTO_INCREMENT PRIMARY KEY, ' +
                                'first_name VARCHAR(100) NOT NULL, '+
                                'last_name VARCHAR(100) NOT NULL, '+
								'born_year INT NOT NULL, '+
								'deceased_year INT NOT NULL, '+
                                'country VARCHAR(100) NOT NULL)';
let [result2] = await connection.query(sql2);
console.log('created a table');
console.log(result2);

let insert2 = "INSERT INTO `artists` (first_name, last_name, born_year, deceased_year, country) VALUES ('Leonardo', 'da Vinci', 1452, 1519, 'France'), ('Pablo', 'Ruiz Picasso', 1881, 1973, 'Spain'),('Diego', 'Velazquez', 1599, 1660, 'Spain'), ('Vincent', 'van Gogh', 1853, 1890, 'Netherland'), ('Salvador', 'Dali', 1904, 1989, 'Spain'), ('Rembrandt', 'van Rijn', 1606, 1669, 'Neitherland'), ('Johannes', 'Vermeer', 1632, 1675, 'Neitherland'), ('Claude', 'Monet', 1840, 1926, 'France'), ('Francisco', 'de Goya', 1746, 1828, 'Spain'), ('Sandro', 'Botticelli', 1445, 1510, 'Italia');";
let [insertResult2] = await connection.query(insert2);
console.log('insert2');
console.log(insertResult2);



//! create table exhibition
// CREATE TABLE museum.exhibition (
// 	exhibition_id INT auto_increment NOT NULL,
// 	exhibition_type varchar(100) NOT NULL,
// 	location varchar(100) NOT NULL,
// 	CONSTRAINT exhibition_pk PRIMARY KEY (exhibition_id)
// )

let sql3 = 'CREATE TABLE exhibition (exhibition_id INT AUTO_INCREMENT PRIMARY KEY, ' +
                                'exhibition_type VARCHAR(100) NOT NULL, '+
                                'location VARCHAR(100) NOT NULL)';
let [result3] = await connection.query(sql3);
console.log('created a table');
console.log(result3);

let insert3 = "INSERT INTO `exhibition` (exhibition_type, location) VALUES ('permanent exhibition', 'display case A'), ('stored collection', 'bookshelf'),('stored collection', 'warehouse A'), ('travelling exhibition', 'display case B'), ('travelling exhibition', 'worehouse B');";
let [insertResult3] = await connection.query(insert3);
console.log('insert3');
console.log(insertResult3);


//! create table borrowing
// CREATE TABLE museum.borrowing (
// 	borrowing_id INT auto_increment NOT NULL,
// 	owner_first_name varchar(100) NOT NULL,
// 	owner_last_name varchar(100) NOT NULL,
// 	owner_email varchar(100) NOT NULL,
// 	owner_address varchar(100) NOT NULL,
// 	borrow_date DATE NOT NULL,
// 	return_date DATE NOT NULL,
// 	artifact_id INT NOT NULL,
// 	CONSTRAINT borrowing_pk PRIMARY KEY (borrowing_id)
// )

let sql4 = 'CREATE TABLE borrowing (borrowing_id INT AUTO_INCREMENT PRIMARY KEY, ' +
                                'owner_first_name VARCHAR(100) NOT NULL, '+
								'owner_last_name VARCHAR(100) NOT NULL, '+
								'owner_email VARCHAR(100) NOT NULL, '+
								'owner_address VARCHAR(100) NOT NULL, '+
								'borrow_date DATE NOT NULL, '+
								'return_date DATE NOT NULL, '+
                                'artifact_id INT NOT NULL)';
let [result4] = await connection.query(sql4);
console.log('created a table');
console.log(result4);

let insert4 = "INSERT INTO `borrowing` (artifact_id, owner_first_name, owner_last_name, owner_email, owner_address, borrow_date, return_date) VALUES (1, 'Louise', 'Barbier', 'barbier@louvre.org', 'Paris, 75001, France', '2020-03-01', '2020-06-30'), ('7', 'Adriaan', 'van der Meer', 'adriaan@rijksmuseum.org', 'Museumstraat 1, 1071 XX Amsterdam, Neitherland', '2021-07-01', '2021-09-15');";
let [insertResult4] = await connection.query(insert4);
console.log('insert4');
console.log(insertResult4);


//! create table lending
// CREATE TABLE museum.lending (
// 	lending_id INT auto_increment NOT NULL,
// 	artifact_id INT NOT NULL,
// 	borrower_first_name varchar(100) NOT NULL,
// 	borrower_last_name varchar(100) NOT NULL,
// 	borrower_email varchar(100) NOT NULL,
// 	lend_date DATE NOT NULL,
// 	return_deadline DATE NOT NULL,
// 	CONSTRAINT lending_pk PRIMARY KEY (lending_id)
// )

let sql5 = 'CREATE TABLE lending (lending_id INT AUTO_INCREMENT PRIMARY KEY, ' +
                                'artifact_id INT NOT NULL, '+
								'borrower_first_name VARCHAR(100) NOT NULL, '+
								'borrower_last_name VARCHAR(100) NOT NULL, '+
								'borrower_email VARCHAR(100) NOT NULL, '+
								'lend_date DATE NOT NULL, '+
                                'return_deadline DATE NOT NULL)';
let [result5] = await connection.query(sql5);
console.log('created a table');
console.log(result5);

let insert5 = "INSERT INTO `lending` (artifact_id, borrower_first_name, borrower_last_name, borrower_email, lend_date, return_deadline) VALUES (5, 'Gabriel', 'Lopez', 'g.lopez@guggenheim.org', '2023-10-05', '2023-12-15'), (8, 'John', 'Doe', 'johndoe@metropolitan.org', '2024-01-08', '2024-05-29');";
let [insertResult5] = await connection.query(insert5);
console.log('insert5');
console.log(insertResult5);



//!1
// SELECT lending.lending_id, lending.artifact_id, artifacts.title,  exhibition.location, lending.return_deadline, lending.borrower_first_name, lending.borrower_last_name, lending.borrower_email   
// FROM museum.lending
// LEFT JOIN artifacts ON lending.artifact_id =artifacts.artifact_id 
// LEFT JOIN exhibition ON artifacts.exhibition_id = exhibition.exhibition_id 
// GROUP BY lending.lending_id, lending.artifact_id, artifacts.title, exhibition.location 

let  consulta1= "SELECT lending.lending_id, lending.artifact_id, artifacts.title,  exhibition.location, lending.return_deadline, lending.borrower_first_name, lending.borrower_last_name, lending.borrower_email FROM museum.lending LEFT JOIN artifacts ON lending.artifact_id =artifacts.artifact_id LEFT JOIN exhibition ON artifacts.exhibition_id = exhibition.exhibition_id GROUP BY lending.lending_id, lending.artifact_id, artifacts.title, exhibition.location ;";
let [resp1] = await connection.query(consulta1);
console.log('consulta1');
console.log(resp1);



//!2
// SELECT exhibition.location, COUNT(*) AS num_artifacts
// FROM museum.artifacts
// RIGHT JOIN exhibition ON artifacts.exhibition_id = exhibition.exhibition_id
// GROUP BY exhibition.location 
// ORDER BY num_artifacts DESC;

let  consulta2= "SELECT exhibition.location, COUNT(*) AS num_artifacts FROM museum.artifacts RIGHT JOIN exhibition ON artifacts.exhibition_id = exhibition.exhibition_id GROUP BY exhibition.location ORDER BY num_artifacts DESC;";
let [resp2] = await connection.query(consulta2);
console.log('consulta2');
console.log(resp2);




		await connection.end();
	}
	catch(err){
		console.log(err);
		connection.end();
	}
}

main();