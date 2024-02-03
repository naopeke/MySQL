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

// SELECT 
// first_name, last_name, title 
// FROM 
// dia1.students
// JOIN dia1.groups ON (students.group_id = groups.group_id)
// JOIN subject_teacher ON (groups.group_id = subject_teacher.group_id)
// JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id )
// GROUP BY 
// first_name, last_name, title


let sql1 = "SELECT first_name, last_name, title FROM dia1.students JOIN dia1.groups ON (students.group_id = groups.group_id) JOIN subject_teacher ON (groups.group_id = subject_teacher.group_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id ) GROUP BY first_name, last_name, title";
let [result1] = await connection.query(sql1);
console.log('result1');
console.log(result1);



//2

// SELECT 
// teachers.first_name, teachers.last_name, subjects.title 
// FROM 
// dia1.teachers
// JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id)
// JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)
// GROUP BY 
// teachers.first_name, teachers.last_name, subjects.title;


let sql2 = "SELECT teachers.first_name, teachers.last_name, subjects.title FROM dia1.teachers JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) GROUP BY teachers.first_name, teachers.last_name, subjects.title;";
let [result2] = await connection.query(sql2);
console.log('result2');
console.log(result2);

//3
// https://www.w3schools.com/sql/sql_distinct.asp
// https://learnsql.es/blog/cual-es-la-diferencia-entre-unique-y-distinct-en-sql/

//各科目ごとの総生徒数、科目の名前、そしてその科目を担当している教師の名前と姓を取得します。
//注意：重複したノートが表示されないようにするために、各科目には1人の教師と1つのグループのみが含まれる必要があります。


//sale Jose, Jose y Menchu
// SELECT 
//   subjects.title AS subject_title,
//   COUNT(students.student_id ) as num_students,
//   teachers.first_name AS teacher_first_name,
//   teachers.last_name AS teacher_last_name
//   FROM dia1.subjects
//   RIGHT JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
//   RIGHT JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id
//   LEFT JOIN marks ON subjects.subject_id = marks.subject_id
//   LEFT JOIN students ON marks.student_id = students.student_id
//   GROUP BY subjects.title, teachers.first_name, teachers.last_name;

//eliminar la columna y ...

let sql3_1 = "SELECT subjects.title AS subject_title, COUNT(students.student_id ) as num_students, teachers.first_name AS teacher_first_name, teachers.last_name AS teacher_last_name FROM dia1.subjects RIGHT JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id RIGHT JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id LEFT JOIN marks ON subjects.subject_id = marks.subject_id LEFT JOIN students ON marks.student_id = students.student_id GROUP BY subjects.title, teachers.first_name, teachers.last_name;";
let [result3_1] = await connection.query(sql3_1);
console.log('result3-1');
console.log(result3_1);


//sale Jose y Menchu usando Min
// https://stackoverflow.com/questions/30232546/select-top-1-id-distinct-field
//   SELECT subjects.title AS subject_title,
// COUNT(DISTINCT students.student_id) AS num_students,
//   teachers.first_name AS teacher_first_name,
//   teachers.last_name AS teacher_last_name
// FROM dia1.subjects
// INNER jOIN (SELECT subject_id, MIN(teacher_id) AS one_teacher_id
// 			FROM dia1.subject_teacher
// 			GROUP BY subject_id
// ) AS one_subject_teacher
// ON subjects.subject_id = one_subject_teacher.subject_id
// RIGHT JOIN teachers ON one_subject_teacher.one_teacher_id = teachers.teacher_id
// LEFT JOIN marks ON subjects.subject_id = marks.subject_id
// LEFT JOIN students ON marks.student_id = students.student_id
// GROUP BY subjects.title, teachers.first_name, teachers.last_name;

let sql3_2 = "SELECT subjects.title AS subject_title, COUNT(DISTINCT students.student_id) AS num_students, teachers.first_name AS teacher_first_name, teachers.last_name AS teacher_last_name FROM dia1.subjects INNER jOIN (SELECT subject_id, MIN(teacher_id) AS one_teacher_id FROM dia1.subject_teacher GROUP BY subject_id) AS one_subject_teacher ON subjects.subject_id = one_subject_teacher.subject_id RIGHT JOIN teachers ON one_subject_teacher.one_teacher_id = teachers.teacher_id LEFT JOIN marks ON subjects.subject_id = marks.subject_id LEFT JOIN students ON marks.student_id = students.student_id GROUP BY subjects.title, teachers.first_name, teachers.last_name;";
let [result3_2] = await connection.query(sql3_2);
console.log('result3-2');
console.log(result3_2);



        await connection.end();
    }
    catch(err){
        console.log(err);
        connection.end();
    }
}

main();
