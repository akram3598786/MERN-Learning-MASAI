import express from 'express';
import connectDatabbase from './Database/CoonectDB.js';
import auth from './Middlewares/Auth.js';
import AuthRouter from './Routes/route.js';
const app = express();
app.use(express.json());
app.use(auth);
app.use(AuthRouter);

app.get('/', app.use(express.static('static')));


let port = 8080;
app.listen(port, async()=>{
   await connectDatabbase();
    console.log(`App is running on ${port}`);
});