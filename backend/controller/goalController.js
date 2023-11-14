
const asyncHandler = require('express-async-handler');
//@desc Get Goal
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message:'Get goals'})
})

//@desc SET Goal
//@route POST /api/goals
//@access Private

const setGoals = asyncHandler (async (req,res) => {
if (!req.body.text){
    res.status(400)
    //using the express error handler rather than .json({message: "Please add a text field"})
    throw new Error('Please add a text field')
}

    res.status(200).json({message:'Set goals'})
})

//@desc Update Goals
//@route PUT /api/goals
//@access Private
const updateGoals = asyncHandler (async (req,res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
})

//@desc Delete Goal
//@route DELETE /api/goals
//@access Private

const deleteGoals = asyncHandler (async (req,res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}