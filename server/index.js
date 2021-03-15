const express = require('express') ;

// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
var mongoose = require('mongoose');
const dotenv =  require('dotenv');
const cors = require('cors')
// import cors from 'cors';
//import routes from posts.js
// import postRoutes from './routes/posts.js';
const postRoutes = require('./routes/posts')
//declare express app instance
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({limit: '50mb'}));



//set up starting route for all the routes, every route starting with posts
app.use("/posts", postRoutes);

//body parser set up (limiting space to use images later)

// app.use(express.urlencoded({ limit: "30mb", extended: true }));
//cors set up


//mongodb atlas connection link
// const CONNECTION_URL ='mongodb+srv://codeCAT:codeCAT123@codecat1.lk8tb.mongodb.net/<dbname>?retryWrites=true&w=majority';
//PORT setup (pre-deployment)
const PORT = process.env.PORT || 5000;
//mongoose setup connection to port and error check
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
