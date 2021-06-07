const express = require ('express')

const app = express ()
const port = process.env.port


app.use(express.static('public'));
app.set ('view engine', 'ejs')

const homeRouter = require('./routes/homeRouter');
//Ruteo
app.use('/', homeRouter);
//app.use('/',userRouter);
//app.use('/products',productRouter);

app.listen(port || 3000, () => {
    console.log('Example app listerning on port');
}); 

