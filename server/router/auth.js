const jwt =  require('jsonwebtoken')
const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const authenticate = require('../middleware/authenticate')

require('../db/conn')
const User = require('../model/userSchema')

// Routes
router.get('/', (req, res) => {
    res.send("hello world")
})

// router.post('/register', (req,res) => {

//     const { name, email, phone, work, password, cpassword } = req.body

//     if(!name || !email || !phone || !work || !password || !cpassword ){
//         return res.status(422).json({err: "All fields are required"})
//     }

//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist) {
//             return res.status(422).json({err: "Email already exixt"})
//         }

//         const user = new User({ name, email, phone, work, password, cpassword })

//         user.save().then(() => {
//             res.status(201).json({message: "User register successfully"})
//         }).catch((err) => {
//             res.status(500).json({error: "Failed to register"})
//         })
//     }).catch((err) => {
//         console.log(err);
//     })
// })


router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ err: "All fields are required" })
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ err: "Email already exixt" })
        } else if (password != cpassword) {
            return res.status(422).json({ err: "password are not matcching" })
        } else {
            const user = new User({ name, email, phone, work, password, cpassword })
            const userRegister = await user.save()
            res.status(201).json({ message: "User register successfully" })
        }
    } catch (err) {
        console.log(err);
    }

})

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email, !password) {
            return res.status(422).json({ err: "Plz field the all data" })
        }

        const userLogin = await User.findOne({ email: email })
        console.log(userLogin)
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            let token = await userLogin.generateAuthToken()
            console.log(token);

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            }) 

            if (!isMatch) {
                res.status(400).json({ err: "Invalid data" })
            } else {
                res.json({ message: "user signin successfully" })
            }
        } else {
            res.status(400).json({ err: "Invalid Email" })
        }
    } catch (err) {
        console.log(err);
    }
})

router.get('/about',  authenticate ,(req, res) => {
    console.log("Hello About");
    res.send(req.rootUser)
})

router.get('/contact', (req, res) => {
    res.send("contact")
})

router.get('/signin', (req, res) => {
    res.send("hello world Login")
})

router.get('/signup', (req, res) => {
    res.send("hello world signup")
})

module.exports = router