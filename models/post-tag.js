const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const PostTag = sequelize.define('postTag', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = PostTag;