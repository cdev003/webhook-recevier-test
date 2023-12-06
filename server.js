const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const server = http.createServer(app);

app.get('/', (req, res) => {
    // console.log('express jwt => ', req.session.user);
    console.log("1");
    res.send('<h2>Reseed API</h2>');
});

app.use('/webhook', (req, res) => {
    // console.log('express jwt => ', req.session.user);
    console.log(req);
});

app.use((req, res, next) => {
    next(createHttpError(404));
});

//* Error Handler
app.use((err, req, res) => {
    res.status(err.status || 500).json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});