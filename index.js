const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('uu! here\'s a uuid: ' + uuid())
}
