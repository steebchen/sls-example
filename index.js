const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('asdf! here\'s a uuid: ' + uuid())
}
