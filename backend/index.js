const express=require("express");
const app=express();

const helmet=require("helmet");
const morgan=require("morgan");
const cors=require("cors");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config(); 


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const execomRoute=require('./routes/campusExecom');

app.use("/api/campus",execomRoute);

app.listen(8000,()=>{
    console.log("Backend running on port 8000");
})
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error("MongoDB connection error:", err));