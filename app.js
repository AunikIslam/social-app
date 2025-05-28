const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./utils/database');
const User = require('./models/user');
const Post = require('./models/post');
const Tag = require('./models/tag');
const PostTag = require('./models/post-tag');

User.hasMany(Post);
Post.belongsTo(User);

Post.belongsToMany(Tag, {through: PostTag});
Tag.belongsToMany(Post, {through: PostTag});

sequelize
    .sync({force: true})
    // .sync()
    .then(() => {
        console.log('Successfully logged in successfully.');
        app.listen(3002);
    })
    .catch((err) => {
        console.log('Errror Occured')
    })