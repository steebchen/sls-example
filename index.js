const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('huh! here\'s a uuid: ' + uuid())
}
