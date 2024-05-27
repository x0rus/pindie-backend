const { sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted } = require("../controllers/users");
const { createUser,
  findUserById,
  updateUser,
  deleteUse } = require("../middlewares/users");

const usersRouter = require("express").Router();

const {} = require("");

usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  );

  usersRouter.get("/users/:id", findUserById, sendUserById);

  usersRouter.put(
    "/users/:id",
    updateUser,
    sendUserUpdated
  );

module.exports = usersRouter;