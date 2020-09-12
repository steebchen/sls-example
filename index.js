const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('hi :D here\'s a uuid: ' + uuid())
}
