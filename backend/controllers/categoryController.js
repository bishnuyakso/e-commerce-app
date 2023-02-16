const Category = require("../models/CategoryModel");

//Search or get all categories
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: "asc" }).orFail();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

//Creating new category
const newCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(400).send("Category input is required");
    }
    const categoryExits = await Category.findOne({ name: category });
    if (categoryExits) {
      res.status(400).send("Category already exits");
    } else {
      const categoryCreated = await Category.create({
        name: category,
      });
      res.status(201).send({ categoryCreated: categoryCreated });
    }
  } catch (error) {
    next(error);
  }
};

//deleting category items with name
const deleteCategory = async (req, res, next) => {
  // return res.send(req.params.category)
  try {
    if (req.params.category !== "Choose category") {
      const categoryExists = await Category.findOne({
        name: decodeURIComponent(req.params.category),
      }).orFail();
      await categoryExists.remove();
      res.json({ categoryDeleted: true });
    }
  } catch (err) {
    next(err);
  }
};

//Saving Attributes in Category
const saveAttr = async (req, res, next) => {
  const { key, val, categoryChosen } = req.body;
  if (!key || !val || !categoryChosen) {
    return res.status(400).send("All inputs field are required");
  }
  try {
    const category = categoryChosen.split("/")[0];
    const categoryExists = await Category.findOne({ name: category }).orFail();
    if (categoryExists.attrs.length > 0) {
      //if key exits in the database then add a value to the key
      var keyDoesNotExistsInDatabase = true;
      categoryExists.attrs.map((item, idx) => {
        if (item.key === key) {
          keyDoesNotExistsInDatabase = false;
          var copyAttributeValues = [...categoryExists.attrs[idx].value];
          copyAttributeValues.push(val);
          var newAttributeValues = [...new Set(copyAttributeValues)]; //Set removes duplicate value
          categoryExists.attrs[idx].value = newAttributeValues;
        }
      });
    } else {
      //push to the array
      if (keyDoesNotExistsInDatabase) {
        categoryExists.attrs.push({ key: key, value: [val] });
      }
    }
    await categoryExists.save();
    let cat = await Category.find({}).sort({ name: "asc" });
    return res.status(201).json({ categoriesUpdated: cat });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories, newCategory, deleteCategory, saveAttr };
