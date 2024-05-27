const { sendCategoryCreated,
        sendCategoryById,
        sendCategoryUpdated,
        sendCategoryDeleted } = require("../controllers/categories");

const { createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory } = require("../middlewares/categories");


const categoriesRouter = require("express").Router();

const {} = require("");

categoriesRouter.post(
    "/categories",
    findAllCategories,
    createCategory,
    sendCategoryCreated
  );

  categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

  categoriesRouter.put(
    "/categories/:id",
    updateCategory,
    sendCategoryUpdated
  );

module.exports = categoriesRouter;