const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('cool! here\'s a uuid: ' + uuid())
}
