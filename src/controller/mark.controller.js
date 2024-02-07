const { pool } = require('../database');

const getAvg = async (req, res) => {
    try {
        sql = 'SELECT AVG(mark) AS average_score FROM marks WHERE student_id=' + req.query.id;

        let [result] = await pool.query(sql);
        res.send(result);
    
    } catch(err){
            console.log(err);
    }
    }


const getApuntadas = async (req, res) => {
    try {
        let sql;
        if (req.query.id == null){
            sql = 'SELECT first_name, last_name, title ' +
            'FROM dia1.students ' +
            'JOIN dia1.marks ON dia1.students.student_id = dia1.marks.student_id ' +
            'JOIN dia1.subjects ON dia1.marks.subject_id = dia1.subjects.subject_id;';
        } else {
            sql = 'SELECT first_name, last_name, title ' +
                'FROM dia1.students ' +
                'JOIN dia1.marks ON dia1.students.student_id = dia1.marks.student_id ' +
                'JOIN dia1.subjects ON dia1.marks.subject_id = dia1.subjects.subject_id ' +
                'WHERE dia1.students.student_id = ' + req.query.id;
        }

        let [result] = await pool.query(sql);
        res.send(result);
    
    } catch(err){
            console.log(err);
    }
    }


const getImpartidas = async (req, res) => {
    try {
        let sql;
        if (req.query.id == null){
            sql = 'SELECT first_name, last_name, title ' +
            'FROM dia1.teachers ' +
            'JOIN dia1.subject_teacher ON dia1.teachers.teacher_id = dia1.subject_teacher.teacher_id ' +
            'JOIN dia1.subjects ON dia1.subject_teacher.subject_id = dia1.subjects.subject_id;';
        } else {
            sql = 'SELECT first_name, last_name, title ' +
            'FROM dia1.teachers ' +
            'JOIN dia1.subject_teacher ON dia1.teachers.teacher_id = dia1.subject_teacher.teacher_id ' +
            'JOIN dia1.subjects ON dia1.subject_teacher.subject_id = dia1.subjects.subject_id ' +
            'WHERE dia1.teachers.teacher_id= ' + req.query.id;
            
            'SELECT * FROM students WHERE student_id=' + req.query.id;
        }

        let [result] = await pool.query(sql);
        res.send(result);
    
    } catch(err){
            console.log(err);
    }
    }


module.exports = {
    getAvg,
    getApuntadas,
    getImpartidas
};