const express = require('express');
const app = express();
const port = 3002;
const mangaRouter = require('./router/mangaRouter');
const userRouter = require('./router/userRouter');

app.use(express.json());
app.use('/api/manga', mangaRouter);
app.use('/api/user', userRouter);

app.listen(port, () => {
   console.log('Express example listening at port ', port);
});