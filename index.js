const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('uuuu! here\'s a uuid: ' + uuid())
}
