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
        console.log('Connection OK');



//1
// SELECT AVG(mark) AS average_score
// FROM dia1.marks
// WHERE  subject_id = 1;

let sql1 = "SELECT AVG(mark) AS average_score FROM dia1.marks WHERE  subject_id = 1;";
let [result1] = await connection.query(sql1);
console.log('result1');
console.log(result1);



//2
// SELECT COUNT(*) 
// FROM dia1.students 
// WHERE group_id = 11;

let sql2 = "SELECT COUNT(*) FROM dia1.students WHERE group_id = 11;";
let [result2] = await connection.query(sql2);
console.log('result2');
console.log(result2);


//3
// SELECT *
// FROM dia1.groups;

let sql3 = "SELECT * FROM dia1.groups;";
let [result3] = await connection.query(sql3);
console.log('result3');
console.log(result3);


//4
// DELETE FROM dia1.marks
// WHERE mark >= 5
// AND YEAR(date) = 2023

let sql4 = "DELETE FROM dia1.marks WHERE mark >= 5 AND YEAR(date) = 2023";
let [result4] = await connection.query(sql4);
console.log('result4');
console.log(result4);


//5
// SELECT *
// FROM dia1.students
// WHERE group_id = 11
// AND year_of_admission = 2023;

let sql5 = "SELECT * FROM dia1.students WHERE group_id = 11 AND year_of_admission = 2023;";
let [result5] = await connection.query(sql5);
console.log('result5');
console.log(result5);



//6
// SELECT subject_id, COUNT(*) AS num_teachers
// FROM dia1.subject_teacher GROUP BY subject_id;

let sql6 = "SELECT subject_id, COUNT(*) AS num_teachers FROM dia1.subject_teacher GROUP BY subject_id;";
let [result6] = await connection.query(sql6);
console.log('result6');
console.log(result6);


//Reto2
//7
// SELECT mark, student_id
// FROM dia1.marks
// WHERE (student_id BETWEEN 1 AND 20)
// OR (mark > 8 AND YEAR(date) = 2023)

let sql7 = "SELECT mark, student_id FROM dia1.marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND YEAR(date) = 2023);";
let [result7] = await connection.query(sql7);
console.log('result7');
console.log(result7);


//8
// SELECT AVG(mark) 
// FROM dia1.marks
// WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) AND date <= CURDATE();

let sql8 = "SELECT AVG(mark) FROM dia1.marks WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) AND date <= CURDATE();";
let [result8] = await connection.query(sql8);
console.log('result8');
console.log(result8);


//9 生徒ごとに過去1年間に与えられた成績の平均
// SELECT student_id, AVG(mark) 
// FROM dia1.marks
// WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) AND date <= CURDATE()
// GROUP BY student_id;

let sql9 = "SELECT student_id, AVG(mark) FROM dia1.marks WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) AND date <= CURDATE() GROUP BY student_id;";
let [result9] = await connection.query(sql9);
console.log('result9');
console.log(result9);


//Reto opcional
//10
// SELECT first_name, last_name, COUNT(subjects.subject_id) AS num_subjects
// FROM dia1.students
// JOIN dia1.marks ON students.student_id = marks.student_id
// JOIN dia1.subjects ON marks.subject_id = subjects.subject_id
// JOIN dia1.subject_teacher ON subjects.subject_id = subject_teacher.subject_id 
// WHERE subject_teacher.teacher_id = 11
// AND (subjects.subject_id = 11 OR subjects.subject_id = 12)
// GROUP BY students.first_name, students.last_name;

let sql10 = "SELECT first_name, last_name, COUNT(subjects.subject_id) AS num_subjects FROM dia1.students JOIN dia1.marks ON students.student_id = marks.student_id JOIN dia1.subjects ON marks.subject_id = subjects.subject_id JOIN dia1.subject_teacher ON subjects.subject_id = subject_teacher.subject_id WHERE subject_teacher.teacher_id = 11 AND (subjects.subject_id = 11 OR subjects.subject_id = 12) GROUP BY students.first_name, students.last_name;";
let [result10] = await connection.query(sql10);
console.log('result10');
console.log(result10);


//11
// SELECT students.first_name, students.last_name, COUNT(subjects.subject_id) AS num_subjects
// FROM dia1.students
// JOIN dia1.marks ON students.student_id = marks.student_id
// JOIN dia1.subjects ON marks.subject_id = subjects.subject_id
// JOIN dia1.subject_teacher ON subjects.subject_id = subject_teacher.subject_id 
// JOIN dia1.teachers ON subject_teacher.teacher_id = teachers.teacher_id
// WHERE teachers.first_name = 'Jose' OR teachers.first_name = 'Menchu'
// AND (subjects.title = 'HTML' OR subjects.title = 'TypeScript')
// GROUP BY students.first_name, students.last_name;

let sql11 = "SELECT students.first_name, students.last_name, COUNT(subjects.subject_id) AS num_subjects FROM dia1.students JOIN dia1.marks ON students.student_id = marks.student_id JOIN dia1.subjects ON marks.subject_id = subjects.subject_id JOIN dia1.subject_teacher ON subjects.subject_id = subject_teacher.subject_id  JOIN dia1.teachers ON subject_teacher.teacher_id = teachers.teacher_id WHERE teachers.first_name = 'Jose' OR teachers.first_name = 'Menchu' AND (subjects.title = 'HTML' OR subjects.title = 'TypeScript') GROUP BY students.first_name, students.last_name;";
let [result11] = await connection.query(sql11);
console.log('result11');
console.log(result11);



        await connection.end();
    }
    catch(err){
        console.log(err);
        connection.end();
    }
}

main();
