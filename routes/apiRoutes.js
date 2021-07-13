const Workout = require("../models/workout.js");
const router = require("express").Router();

// GET LAST WORKOUT
router.get("workouts", async (req, res) => {
  try {
    const workoutData = Workout.find({});
    return res.json(workoutData);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// UPDATE WORKOUT WITH NEW EXERCISE
router.put("workouts/:id", async (req, res) => {
  try {
    const updateWorkout = Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updateWorkout);
  } catch (err) {
    return res.status(400).json(err);
  }
});
// CREATE NEW WORKOUT
router.post("workouts", async (req, res) => {
  try {
    const newWorkout = Workout.create({});
    return res.status(200).json(newWorkout);
  } catch (err) {
    return status(400).json(err);
  }
});
// GET WORKOUTS RANGE
router.get("workouts/range", async (req, res) => {
  try {
    const workoutRange = Workout.find({});
    return res.status(200).json(workoutRange);
  } catch (err) {
    return status(400).json(err);
  }
});
router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
