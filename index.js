const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('what up? heh, here\'s a uuid: ' + uuid())
}
