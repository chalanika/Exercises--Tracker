const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get(async (req,res)=>{ 
    try {
        users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
});

router.route('/add').post(async (req,res)=>{
    console.log('qqqqqqqqqqqqqqqqqqqq');

    const newUser = new User({
        username : req.body.username,
    });
    try {
        const saved = await newUser.save();
        console.log(saved);
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;