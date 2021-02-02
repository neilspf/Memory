import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'


const app = express();

app.use(bodyparser.json({limit: "30mb" ,extended:true}))
app.use(bodyparser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());
app.use('/posts',postRoutes);
const CONNECTION_URL ="mongodb+srv://swapnil:Swapnil1325@cluster0.ayqjl.mongodb.net/Cluster0?retryWrites=true&w=majority"
const PORT = process.env.PORT||5000;
mongoose.connect (CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(() =>app.listen(PORT,() =>console.log(`server is running on port:${PORT}`)))
        .catch((err) =>console.log("error in connecting to the database"+err))
mongoose.set('useFindAndModify',false);