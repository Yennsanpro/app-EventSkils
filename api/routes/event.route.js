const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/checkAuth");

const {
  getAllEventsHandler,
  getEventById,
  getEventByState,
  createEvent,
  registerUserEvent,
  getUserEventsHandler,
  updateEvent,
  deleteEvent,
  addMaterialEvent,
} = require("../controllers/event.controller");

router.get("/", getAllEventsHandler);
router.get("/:eventId/user", checkAuth, getEventByState)
router.get("/user/:userId", checkAuth, getUserEventsHandler)
router.put("/:eventId/user", checkAuth, registerUserEvent)
router.put("/:eventId/materials/:materialId", checkAuth, checkAdmin, addMaterialEvent)
router.get("/:id", getEventById);
router.post("/", checkAuth, createEvent);
router.put("/:id", checkAuth, checkAdmin, updateEvent);
router.delete("/:id", checkAuth, checkAdmin, deleteEvent);

module.exports = router;