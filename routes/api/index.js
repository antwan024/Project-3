const router = require("express").Router();
const workoutRoutes = require("./workouts");
const eventRoutes = require("./events");
const foodRoutes = require("./foods");
const achievementRoutes = require("./achievements");


router.use("/workouts", workoutRoutes);
router.use("/events", eventRoutes);
router.use("/foods", foodRoutes);
router.use("/achievements", achievementRoutes);

module.exports = router;
