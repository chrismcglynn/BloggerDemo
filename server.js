const express = require('express');
const connectDB = require('./config/db');

const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Connect DB
connectDB();
app.get('/', (req, res) => res.send('API Running'));

// Init Middleware
app.use(express.json({ extended: false }));


// Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Define PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
