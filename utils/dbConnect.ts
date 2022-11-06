// const mongoose = require('mongoose');
import mongoose from "mongoose"
import { DATABASE_URI } from "../env";

export const accessifiedDB = async() => {
    try{
        
        await mongoose.connect(`${DATABASE_URI}`, {
            // useUnifiedTopology: true,
            // useNewUrlParser: true
        })
        console.log("DATABASE CONNECTED!")
        
    } catch(err){
        return err;
    }
} 