const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('hello! here\'s a uuid: ' + uuid())
}
