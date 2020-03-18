const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lean-on', {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => {
        console.log('BD on')
    })
    .catch(err => {
        console.log('erro ao conectar')
    })

mongoose.Promise = global.Promise;

module.exports = mongoose;