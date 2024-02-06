const { Router } = require ('express');
const router = Router();
const markCtrl = require('../controller/mark.controller');

router.get('/media', markCtrl.getAvg);
router.get('/apuntadas', markCtrl.getApuntadas);
router.get('/impartidas', markCtrl.getImpartidas);

module.exports = router;