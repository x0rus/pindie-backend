const categories = require("../models/category");

const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
      req.category = await categories.create(req.body);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
    }
  };

const findAllCategories = async (req, res, next) => {
    // По GET-запросу на эндпоинт /categories найдём все документы категорий
  req.categoriesArray = await categories.find({});
  next();
};

const findCategoryById = async (req, res, next) => {
    console.log("GET /categories/:id");
    try {
      req.category = await categories.findById(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(404).send(JSON.stringify({ message: "Категория не найдена" }));
    }
  };

const updateCategory = async (req, res, next) => {
    try {
      req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
      next();
    } catch (error) {
      res.status(400).send({ message: "Ошибка обновления категории" });
    }
  };

  const deleteCategory = async (req, res, next) => {
    console.log("DELETE /categories/:id");
    try {
      req.category = await categories.findByIdAndDelete(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка удаления категории" }));
    }
  };

  module.exports = {
  createCategory,
  findAllCategories,
  findCategoryById,
  updateCategory,
  deleteCategory
  };