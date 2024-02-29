const express = require('express')
const router = express.Router()
const multer = require('multer')
const models = require('./db.js')
const fs = require('fs')
const path = require('path');
const mysql = require('mysql')
const $sql = require('./sqlMap.js')

const conn = mysql.createConnection(models.mysql)
conn.connect();

const upload = multer({ dest: 'upload/' })



const jsonWrite = (res, ret) => {
	if (typeof ret === 'undefined') {
		res.json({
			code: '1',
			msg: '操作失败'
		})
	} else {
		res.json(ret);
	}
};

router.get('/viewuser', (req, res) => {
	const sql = $sql.user.views;
	conn.query(sql, (err, result) => {
		if (err) {
			console.log('访问失败', err)
		}
		if (result) {
			jsonWrite(res, result)
		}
	})
})

router.post('/adduser', (req, res) => {
	const addSql = $sql.user.add;
	const parmas = [
		req.body.wechat,
		req.body.phone,
		req.body.price,
		req.body.quota,
		req.body.hash,
		req.body.project
	]
	conn.query(addSql, parmas, (err, result) => {
		if (err) throw err;
		res.json({
			id: result.insertId
		})

	})
})

router.get('/viewpro', (req, res) => {
	const sql = $sql.project.views;
	conn.query(sql, (err, result) => {
		if (err) {
			console.log('访问失败', err)
		}
		if (result) {
			jsonWrite(res, result)
		}
	})
})



const UPLOAD_DIR = 'C:\\Users\\Administrator\\Desktop\\OA server\\xPanseWebsite\\src\\images';
router.post('/upload', upload.single('image'), (req, res) => {
	let filedata = {
		originalname: req.file.originalname,
		filename: req.file.filename,
		destination: UPLOAD_DIR + '\\' + req.file.filename + path.extname(req.file.originalname)
	}

	fs.renameSync(req.file.path, filedata.destination)

	let maxidSql = 'SELECT MAX(id) AS maxId FROM imagesfile'
	conn.query(maxidSql, (err, result) => {
		if (err) throw err;

		const id = result[0].maxId + 1

		let sql = 'insert into imagesfile (id,originalname,filename,destination) values(?,?,?,?)'
		conn.query(sql, [id, filedata.originalname, filedata.filename, filedata.destination], (err, result) => {
			if (err) throw err;
			res.send('Upload Successful!')
		})
	})
});



router.get('/checkimage', (req, res) => {

	const sql = 'SELECT * FROM imagesfile'
	conn.query(sql, (err, result) => {
		if (err) throw err;

		jsonWrite(res, result)
	})
})

module.exports = router;