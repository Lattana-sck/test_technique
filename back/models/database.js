const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/troov",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("MongoDB connected");
        else console.log("Connection error : " + err);
    }
)

