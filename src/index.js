import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
}
);

//calling db connect function ad connection it to the server 

connectDB()
.then(() => {
   application.listen(processenv.PORT || 8000), () =>{
    console.log(`Server is runnign on port:' ${process.env.PORT}`);
   }
})
.catch( (error) =>{
    console.log("error connecting db: , error");
})