const users = require('../model/user');
const Users = require('../model/Users');
const bcrypt = require('bcrypt')

const check_user = async(req, res) => {
    if (!req.body.user && !req.body.pass) {
        return res.sendFile('index.html', { root: __dirname });
    }

    const user = req.body.user;
    const pass = req.body.pass;
    const authorize = await Users.findOne({ username: req.body.user });
    if (!authorize) return res.status(409).json({ "Error": "User Not Exist" });

    credentials = await bcrypt.compare(pass, authorize.password);
    console.log("User  " + user)
    console.log("Password " + pass)
    console.log("Credentials " + credentials)
    if (credentials) {
        try {
            // req.session.user = user;
            return res.status(200).json({ "Message": `Welcome  ${user}` });
        } catch (err) {
            return res.status(409).send(err.message)
        }
    } else {
        return res.status(409).json({ "Error": "Password Not Match" });
    }
}

module.exports = { check_user };