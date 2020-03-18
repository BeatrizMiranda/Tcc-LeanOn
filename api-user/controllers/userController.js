const mongoose = require("mongoose");
require("../model/user");
const User = mongoose.model("User");


module.exports = {
    async store(req, res) {

        const {
            name,
            email,
            password
        } = req.body;

        let user = await User.findOne({
            email
        });

        if (!user) {
            user = await User.create({
                    name,
                    email,
                    password
                })
                .then(u => {
                    return res.json(u)
                })
                .catch(err => console.log(err))
        }
        return res.send({
            user
        });
    },

    async index(req, res) {
        const {
            name
        } = req.body;

        let user = await User.findOne({
            name: req.params.name
        })

        return res.json(user);

    }
}