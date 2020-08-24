const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('it works!!! here\'s a uuid: ' + uuid())
}
