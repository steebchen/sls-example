const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('YAY! here\'s a uuid: ' + uuid())
}
