//mongoose module require maane package install karna padega

const mongoose = require("mongoose";
    const connectDb=async()=>{
        try{
            const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        }
    }
)