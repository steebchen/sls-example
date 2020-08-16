const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('oh my! here\'s a uuid: ' + uuid())
}
