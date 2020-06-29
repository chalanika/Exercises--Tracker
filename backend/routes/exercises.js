const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('./').get(async (req,res)=>{ 
    try {
        exercises = await Exercise.find();
        res.json(exercises);
    } catch (error) {
        res.json({ message: error });
    }
});

router.route('/add ').post(async (req,res)=>{
    const newExercise = new Exercise({
        username : req.body.username,
        description:req.body.description,
        duration:Number(req.body.duration),
        date:Date.parse(req.body.date),
    });
    try {
        const saved = await newExercise.save();
        res.json(saved);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;