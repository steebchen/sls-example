const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('hi! here\'s a uuid: ' + uuid())
}
