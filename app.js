const express = require('express');
const app = express();
const mainRouter = require('./routers/main')
const aboutRouter = require('./routers/about')

app.use(express.static('public'))
app.set('view engine', 'ejs')



const puerto = 3000;

app.listen(puerto, () => {
    console.log('Servidor funcionando')
})

app.use("/", mainRouter);

app.use("/about", aboutRouter);