const { pool } = require('../database');

const getUser = async (req, res) => {
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


const postUser = async (req, )