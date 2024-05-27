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

module.exports = gamesRouter;