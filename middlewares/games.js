const createGame = async (req, res, next) => {
    console.log("POST /games");
    try {
      console.log(req.body);
      req.game = await games.create(req.body);
      next();
    } catch (error) {
      res.status(400).send("Error creating game");
    }
  };

const findGameById = async (req, res, next) => {
    try {
      req.game = await games
        .findById(req.params.id) 
        .populate("categories") 
        .populate("users"); 
      next();
    } catch (error) {
      res.status(404).send({ message: "Игра не найдена" });
    }
  };

const findAllGames = async (req, res, next) => {
    console.log("GET /games");
    req.gamesArray = await games
      .find({})
      .populate("categories")
      .populate({
            path: "users",
            select: "-password"
          });
    next();
  };

const updateGame = async (req, res, next) => {
    try {
      req.game = await games.findByIdAndUpdate(req.params.id, req.body);
      next();
    } catch (error) {
      res.status(400).send({ message: "Ошибка обновления игры" });
    }
  };


const deleteGame = async (req, res, next) => {
  try {
    // Методом findByIdAndDelete по id находим и удаляем документ из базы данных
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error deleting game" });
  }
};

module.exports = {
  createGame,
  findGameById,
  findAllGames,
  updateGame,
  deleteGame
};