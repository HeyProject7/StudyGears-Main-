const express = require('express')
const router = express.Router();
const fire = require('../events/fire');
const path = require('path');
const SignUp = require('../controller/sign_up');
const login = require('../controller/studygears_login');
const Courses = require("../model/Courses");
const sendMail = require('../controller/sendMail');

// Route Handlers
router.get('^/$|index(.html)?', (req, res) => {
    fire.emit('connection', req)
    console.log('/  Get ')
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'index.html'));
})
router.post('^/$|index(.html)?', (req, res) => {
    fire.emit('connection', req)
    console.log('/  Post ')
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})
router.get('^/$|courses(.html)?', (req, res) => {
    Courses.find({}, (err, data) => {
        if (err) return console.log(err);
        console.log("ARRAY ", data);
        var post = req.query.post;
        console.warn("Post : ", post);
        res.render(path.join(__dirname, '..', 'views', 'rootViews', 'courses.pug'), {
            courses: data,
            post: post
        });
    });
    router.get('^/$|accessToken(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'accessToken.html'));
    });

    // res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'courses.html'));
});
router.get('^/$|adminPanel(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'adminPanel.html'));
});
router.get('^/$|mail(.html)?', sendMail);
// const nodemailer = require('nodemailer');
// let testaccount = await nodemailer.createTestAccount();
// let transport = await nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'sammie.aufderhar88@ethereal.email',
//         pass: 'x7VN1GT7PXA4HBjv7u'
//     }
// });
// let mailOptions = {
//     from: 'StudyGears <no-reply@studygears.com>',
//     to: 'projectaavs.cpp@gmail.com',
//     subject: 'StudyGears Access Token',
//     text: 'Hey We Use This Access Token To Authenticate Your Account'
// };
// transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         res.send(error.message);
//     } else {
//         res.send("Mail Sent ");
//     }
// });


router.get('/about(.html)?', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'about.html'))
});
router.get('/sample(.html)?', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'courses.html'))
});
router.get('/contact(.html)?', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'contact.html'))
});
router.get('/login_signIn(.html)?', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'login_signIn.html'))
});
router.get('/register(.html)?', (req, res) => {
    console.log(req.url)
    res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'register.html'))
});
router.get('/old-page(.html)?', (req, res) => {
    fire.emit('connection', req);
    // res.redirect(path.join(__dirname, '..', 'views', 'new-page.html'));
    res.redirect('/new-page');
    console.log(req.url);
});
router.get('/tools(.html)?', (req, res, next) => {
    res.status(200).send('<h1>Tools</h1>');
    next()
}, (req, res) => {
    res.send('New Content')
});

// Handling SignUp
router.post('/sign-up(.html)?', SignUp.createNewUser);

// Handling Login
router.post('/login_signIn(.html)?', login.check_user);

module.exports = router;