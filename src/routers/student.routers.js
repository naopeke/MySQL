const { Router } = require ('express');
const router = Router();
const studentCtrl = require('../controller/student.controller');

router.get('/alumnos', studentCtrl.getStudents)
router.post('/alumnos', studentCtrl.postStudent);
router.put('/alumnos', studentCtrl.putStudent);
router.delete('/alumnos', studentCtrl.deleteStudent);

module.exports = router;