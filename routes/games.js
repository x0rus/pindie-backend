const { sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
 sendAllGames } = require("../controllers/games");
const { createGame,
  findGameById,
  findAllGames,
  updateGame,
  deleteGame } = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.get("/games", findAllGames, sendAllGames)

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