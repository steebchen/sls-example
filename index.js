const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('omg!??! heh, here\'s a uuid: ' + uuid())
}
