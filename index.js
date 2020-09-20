const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('it works! heh, here\'s a uuid: ' + uuid())
}
