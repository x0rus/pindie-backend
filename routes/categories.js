const { sendCategoryCreated,
        sendCategoryById,
        sendCategoryUpdated,
        sendCategoryDeleted,
        sendAllCategories } = require("../controllers/categories");

const { createCategory,
  findAllCategories,
  findCategoryById,
  updateCategory,
  deleteCategory } = require("../middlewares/categories");

const categoriesRouter = require("express").Router();


categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.post(
    "/categories",
    findAllCategories,
    createCategory,
    sendCategoryCreated
  );

//  categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

  categoriesRouter.put(
    "/categories/:id",
    updateCategory,
    sendCategoryUpdated
  );

  categoriesRouter.delete("/categories/:id",deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;