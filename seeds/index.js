const sequelize = require('../config/connection');
const Recipe = require('../controllers/models/recipe');
const recipeData = require('./recipe-seed.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Recipe.bulkCreate(recipeData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };

  seedDatabase();