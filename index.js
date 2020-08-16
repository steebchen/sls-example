const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('hooa! here\'s a uuid: ' + uuid())
}
