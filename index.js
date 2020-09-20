const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('hmhm! heh, here\'s a uuid: ' + uuid())
}
