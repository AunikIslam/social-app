const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Tag = sequelize.define('tag', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.INTEGER
    }
});

module.exports = Tag;