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