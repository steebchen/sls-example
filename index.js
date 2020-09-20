const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('yay! heh, here\'s a uuid: ' + uuid())
}
