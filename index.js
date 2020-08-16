const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('go! here\'s a uuid: ' + uuid())
}
