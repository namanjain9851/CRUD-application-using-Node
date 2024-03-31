const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://root:root123@mongodbcluster.r9k4dv2.mongodb.net/?retryWrites=true&w=majority&appName=mongoDbCluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/items', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


