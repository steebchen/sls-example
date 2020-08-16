const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('a! here\'s a uuid: ' + uuid())
}
