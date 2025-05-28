const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'social-app',
    'root',
    'Pa**word@MySqlRoot',
    {dialect: 'mysql'},
    {host: 'localhost'}
);

module.exports = sequelize;