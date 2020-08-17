const { v4: uuid } = require('uuid')

module.exports = (req, res) => {
	res.end('ahoy. here\'s a uuid: ' + uuid())
}
