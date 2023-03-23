import express from 'express';

const app = express();

const PORT = process.emit.PORT || 5000;

const start = () => {
    app.listen(5000, () => {
        console.log("Listening at port: 5000!!!")
    });
};

start();