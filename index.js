const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('noice! here\'s a uuid: ' + uuid())
}
