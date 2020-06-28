const express = require('express')
const multer = require('multer')
const path = require('path');
const router = express.Router();
const {mkdir, cleanDir} = require('../utils/fileUtils/index');

//声明存储规则
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        mkdir(`public/${req.body.dir.split(file.originalname)[0]}`);
        cb(null, `public/${req.body.dir.split(file.originalname)[0]}`)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({storage: storage})

router.post('/', upload.single('data'), function (req, res, next) {
    res.send(`file:${req.file.originalname} is uploaded successfully`)
})

router.get('/clear', function (req, res) {
    cleanDir(path.resolve(__dirname, '../public'));
    res.send('clear successfully');
})

module.exports = router;
