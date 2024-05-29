const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
  };

  const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.gamesArray));
  };

  const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
  }; 

const sendGameUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end({ message: "Игра обновлена" });
  };

const sendGameDeleted = (req, res) => {
 
res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify(req.game));
};

module.exports = {
  sendGameCreated,
  sendAllGames,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted
};