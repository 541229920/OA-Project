let sqlMap = {
	user: {
		views: 'SELECT * FROM user',
		add: 'INSERT INTO user (wechat,  phone,  price , quota, hash,project ) VALUES (?,?,?,?,?,?)'
	},
	project: {
		views: 'SELECT * FROM project',
		add:'INSERT INTO project (project, rule,  price , token, value ) VALUES (?,?,?,?,?)'
	}
}
module.exports = sqlMap;