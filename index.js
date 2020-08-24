const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('it actually works!! here\'s a uuid: ' + uuid())
}
