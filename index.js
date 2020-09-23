const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('test! here\'s a uuid: ' + uuid())
}
