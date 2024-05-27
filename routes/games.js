const { sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted } = require("../controllers/games");
const { createGame,
  findGameById,
  findAllGames,
  updateGame,
  deleteGame } = require("../middlewares/games");

const gamesRouter = require("express").Router();

const {} = require("");

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.put(
    "/games/:id",
      findGameById,
      updateGame,
      sendGameUpdated
  );


gamesRouter.delete(
  "/games/:id",
  deleteGame,
  sendGameDeleted
);

module.exports = gamesRouter;