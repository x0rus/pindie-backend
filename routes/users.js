const { sendUserCreated,
  sendUserById,
  sendAllUsers,
  sendUserUpdated,
  sendUserDeleted } = require("../controllers/users");
const { createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser } = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  );

  usersRouter.get("/users/:id", findUserById, sendUserById);

  usersRouter.get("/users", findAllUsers, sendAllUsers);

  usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

  usersRouter.put(
    "/users/:id",
    updateUser,
    sendUserUpdated
  );

module.exports = usersRouter;