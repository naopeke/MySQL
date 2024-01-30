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


        // let createDireccion = 'CREATE TABLE direccion (direccion_id INT AUTO_INCREMENT PRIMARY KEY, ' +
        //                         'student_id INT, '+
        //                         'calle VARCHAR(200),'+
        //                         'numero INT, '+
        //                         'ciudad VARCHAR(60))';
        // let [resultCreateDireccion] = await connection.query(createDireccion);
        // console.log('created a table');
        // console.log(resultCreateDireccion);


        //https://www.1keydata.com/es/sql/sql-alter-table.php
        // let addColumnDireccion = "ALTER TABLE `direccion` ADD pais VARCHAR(60)";
        // let [resultColumnDireccion] = await connection.query(addColumnDireccion);
        // console.log('Inserted the data');
        // console.log(resultColumnDireccion);


        // let deleteColumnDireccion = "ALTER TABLE `direccion` DROP pais";
        // let [resultColumnDireccionDelete] = await connection.query(deleteColumnDireccion);
        // console.log('Deleted the data');
        // console.log(resultColumnDireccionDelete);


        //https://www.1keydata.com/es/sql/sql-drop-table.php
        // let deleteDireccion = "DROP TABLE `direccion`";
        // let [resultDeleteDireccion] = await connection.query(deleteDireccion);
        // console.log('Deleted the table');
        // console.log(resultDeleteDireccion);


        //https://www.1keydata.com/es/sql/sql-update.php
        // let updateSetToZero = "UPDATE `marks` SET `mark`= '0'";
        // let [resultSetToZero] = await connection.query(updateSetToZero);
        // console.log('Updated the table');
        // console.log(resultSetToZero);

        //SELECT FROM https://www.1keydata.com/es/sql/sql-select.php
        // let selectFullName = "SELECT first_name, last_name FROM students";
        // let [resultFullName] = await connection.query(selectFullName);
        // console.log('Selected the data of students');
        // console.log(resultFullName);


        // let selectProfs = "SELECT * FROM teachers"
        // let [resultProfs] = await connection.query(selectProfs);
        // console.log('Selected the data of teachers');
        // console.log(resultProfs);

        //Reto2
        //https://www.1keydata.com/es/sql/sql-delete.php
        //https://www.w3schools.com/sql/func_mysql_date_sub.asp
        //https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html
        //https://stackoverflow.com/questions/55577010/delete-record-beetween-current-date-and-last-week-interval-14-days
        // let delete10yrs = "DELETE FROM `marks` WHERE `date` < DATE_SUB(CURDATE(), INTERVAL 10 YEAR)";
        // let [resultDelete10yrs] = await connection.query(delete10yrs);
        // console.log('Deleted the data over 10 years');
        // console.log(resultDelete10yrs);


        //Reto2
        // let setMarkToFive = "UPDATE `marks` SET `mark` = 5 WHERE `mark` < 5";
        // let [resultMarkFive] = await connection.query(setMarkToFive);
        // console.log('Updated the data');
        // console.log(resultMarkFive);


        //Reto Opcional
        // https://www.w3schools.com/sql/sql_count.asp
        // let countTotal = "SELECT COUNT (*) FROM `marks`";
        // let [resultCountTotal] = await connection.query(countTotal);
        // console.log('Counted the data');
        // console.log(resultCountTotal);

        //¿Cuál sería una buena práctica para agilizar la velocidad de las consultas sobre tablas que sean excesivamente grandes (que tengan muchas filas)?
        //https://medium.com/learning-sql/12-tips-for-optimizing-sql-queries-for-faster-performance-8c6c092d7af1
        // Se puede crear Index para columunas cuando se usa WHERE, JOIN, y ORGER BY aunque si crea tantos index como INSERT, UPDATE, DELETE, peora.
        //Para que no busque todos los datos, crear INDEX como esto https://www.sqlshack.com/es/vision-general-y-estrategias-de-indices-sql/

        // Subqueries tambien peora el performance, especialmente cuando se usa WHERE o HAVING. Es mejor no usar subqueries, y 
        // es mejor usar JOIN etc.

        // Es mejor evitar usar SELECT * wild card. Usa SELECT con una columna adecuada.



        //Es posible obtener en una misma consulta el nombre de un alumno y las asignaturas que cursa? Si es así describe la forma en la que se haría.
        //https://www.w3schools.com/sql/sql_join.asp
        //https://learnsql.com/blog/how-to-join-3-tables-or-more-in-sql/
        let selectStudentSubject = "SELECT students.first_name, students.last_name, subjects.title FROM students JOIN marks ON students.student_id = marks.student_id JOIN subjects ON subjects.subject_id = marks.subject_id";
        let [resultStudentSubject] = await connection.query(selectStudentSubject);
        console.log('Selected the data');
        console.log(resultStudentSubject);



        await connection.end();
    }
    catch(err){
        console.log(err);
        connection.end();
    }
}

main();



// ****************************************************
// otros codigos que he probado para practicar
// let createStudents = 'CREATE TABLE students (student_id INT AUTO_INCREMENT PRIMARY KEY, ' +
        //                                 'first_name VARCHAR(100), '+
        //                                 'last_name VARCHAR(100), '+
        //                                 'group_id INT)';
        // let [resultCreateStudents] = await connection.query(createStudents);
        // console.log('created a table');
        // console.log(resultCreateStudents);


        // let createGroups = 'CREATE TABLE groups (group_id INT AUTO_INCREMENT PRIMARY KEY, ' +
        //                                 'name VARCHAR(100))';
        // let [resultCreateGroups] = await connection.query(createGroups);
        // console.log('created a table');
        // console.log(resultCreateGroups);


        // let createSubjects = 'CREATE TABLE subjects (subject_id INT AUTO_INCREMENT PRIMARY KEY, ' +
        //                                 'title VARCHAR(100))';
        // let [resultCreateSubjects] = await connection.query(createSubjects);
        // console.log('created a table');
        // console.log(resultCreateSubjects);


        // let createSubjectTeacher = 'CREATE TABLE subject_teacher (subject_id INT AUTO_INCREMENT PRIMARY KEY, ' +
        //                                 'teacher_id INT, '+
        //                                 'group_id INT)';
        // let [resultCreateSubjectTeacher] = await connection.query(createSubjectTeacher);
        // console.log('created a table');
        // console.log(resultCreateSubjectTeacher);


        // let insertGroups = "INSERT INTO `groups` (name) VALUES ('6A'), ('6B'), ('7A'), ('7B'), ('8A'), ('8B'), ('9A'), ('9B'), ('10A'), ('10B')";
        // let [resultInsertGroups] = await connection.query(insertGroups);
        // console.log('Inserted the data');
        // console.log(resultInsertGroups);
        

        // let insertSubjects = "INSERT INTO `subjects` (title) VALUES ('Math'),  ('Science'), ('English'), ('Spanish'),('Giography'), ('History'), ('Music'), ('P.E.'), ('Art'), ('Health Education')";
        // let [resultInsertSubjects] = await connection.query(insertSubjects);
        // console.log('Inserted the data');
        // console.log(resultInsertSubjects);


        // let insertTeachers = "INSERT INTO `teachers` (first_name, last_name) VALUES ('Leonardo', 'Da Vinci'),  ('Thomas', 'Edison'), ('William', 'Shakespeare'), ('Miguel', 'de Cervantes'),('Alexander', 'von Hunboldt'), ('Leopold', 'von Ranke'), ('Manuel', 'de Falla'), ('Diego', 'Simeone'), ('Salvador', 'Dali'), ('Santiago', 'Ramon y Cajal')";
        // let [resultInsertTeachers] = await connection.query(insertTeachers);
        // console.log('Inserted the data');
        // console.log(resultInsertTeachers);


        // let insertSubjectTeachers = "INSERT INTO `subject_teacher` (subject_id, teacher_id, group_id) VALUES (1, 1, 7), (1, 1, 8), (1, 1, 9), (1, 1, 10), (2, 2, 5), (2, 2, 6), (2, 2, 7), (2, 2, 8), ('3', '3', '1'), ('3', '3', '2'),('4', '4', '3'),('5', '5', '4'), ('6', '6', '5'), ('7', '7', '6'), ('8', '8', '7'), ('9', '9', '8'), ('10', '10', '9')";
        // let [resultInsertSubjectTeachers] = await connection.query(insertSubjectTeachers);
        // console.log('Inserted the data');
        // console.log(resultInsertSubjectTeachers);


