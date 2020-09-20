const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('??! heh, here\'s a uuid: ' + uuid())
}
