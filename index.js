const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('ajaj! heh, here\'s a uuid: ' + uuid())
}
