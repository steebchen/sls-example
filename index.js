const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('hoo! here\'s a uuid: ' + uuid())
}
