const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.get('/', async (req,res)=>{ 
    try {
        exercises = await Exercise.find();
        res.json(exercises);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/add' , async (req,res)=>{
    console.log(req.body);
    const newExercise = new Exercise({
        username : req.body.username,
        description:req.body.description,
        duration:req.body.duration,
        date:req.body.date,
    });
    try {
        const saved = await newExercise.save();
        console.log(saved);
        res.json('saved');
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:id',async (req,res)=>{  
    try {
        const result = await Exercise.findById(req.params.id);
        res.json(result);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/:id', async (req, res) => {
    console.log('delete',req.params.lawyerId);
    try {
        const res = await Exercise.findByIdAndDelete(req.params.id);
        res.json('Exercise delete');
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:id' , async (req,res)=>{  
    try {
        const res = await Exercise.findById(req.params.id);
        res.json(res);
    } catch (error) {
        res.json({ message: error });
    }
});

router.put('/:id' , async (req,res)=>{
    try {
        const updateUser = await Exercise.findById({ _id: req.params.id });
        updateUser.username = req.body.username;
        updateUser.description = req.body.description;
        updateUser.duration = req.body.duration;
        updateUser.date = req.body.date;
        
        const saved = await Exercise.findByIdAndUpdate(req.params.id, updateUser, { new: true });
        res.json(saved);

    } catch (error) {
        res.json({ message: error });
    }
})

module.exports = router;