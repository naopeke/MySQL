const express = require('express');
const app = express();
const { pool } = require('../database');


const getStudents = async (req, res) => {
    try {
        let sql;
        if (req.query.id == null){
            sql = 'SELECT * FROM students';
        } else {
            sql = 'SELECT * FROM students WHERE id=' + req.query.id;

            let [result] = await pool.query(sql);
            res.send(result);
        }
        }
        catch(err){
            console.log(err);
        }
    }


const postStudent = async (req, res) => {
    try {
        let sql = 'INSERT INTO students (first_name, last_name, group_id)' +
                'VALUES ("' + req.body.first_name + '", "'+
                req.body.last_name + ' ", "' +
                req.body.group_id + '")';
        console.log(sql);
        let [result] = await pool.query(sql);   
        console.log(result);

        if(result.insertId){
        res.send(String(res.insertId));
        } else {
        res.send('-1');
        }
    } catch(err){
        console.log(err);
    }
}


const putStudent = async (req, res) => {
    try {
        console.log(req.body);
        let params = [req.body.first_name,
                    req.body.last_name,
                    req.body.group_id,
                    req.body.student_id];

        let sql = 'UPDATE students SET first_name = COALESCE(?, first_name)' +
                'last_name = COALESCE(?, last_name),' +
                'group_id = COALESCE(?, group_id) WHERE student_id = ?';

        console.log(sql);
        let [result] = await pool.query(params);   
            res.send(result);
            
    } catch(err){
        console.log(err);
    }
}

const deleteStudent = async (req, res) => {
    try {
        console.log(req.body);
        let params = [req.body.student_id];
        let sql = 'DELETE FROM students WHERE student_id = ?';
        console.log(sql);
        let [result] = await pool.query(sql,params);
        res.send(result);
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    getStudents,
    postStudent,
    putStudent,
    deleteStudent
};