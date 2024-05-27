const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
  };

  const sendUserById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
  };

  const sendUserUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end({ message: "Игра обновлена" });
  };

  const sendUserDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
  };

  module.exports = {
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted
  };