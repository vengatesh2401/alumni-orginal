const mongoose = require('mongooese');

// database connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Mongodb connected successfully..');
}).catch((err) => {
    console.log('Mongodb connection failed:', err);
});

module.exports = mongoose;