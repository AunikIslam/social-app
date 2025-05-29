const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./utils/database');
const User = require('./models/user');
const Post = require('./models/post');
const Tag = require('./models/tag');
const PostTag = require('./models/post-tag');
const userRoutes = require('./routes/user-routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user', userRoutes);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.redirect('/user/sign-up');
    // next();
});

User.hasMany(Post);
Post.belongsTo(User);

Post.belongsToMany(Tag, {through: PostTag});
Tag.belongsToMany(Post, {through: PostTag});

sequelize
    // .sync({force: true})
    .sync()
    .then(() => {
        console.log(__dirname);
        app.listen(3002);
    })
    .catch((err) => {
        console.log('Errror Occured')
    })