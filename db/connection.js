const mongoose = require("mongoose")

async function main(){
    try{
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://joaopleseux:mm24~~92H@cluster0.mdxwgl9.mongodb.net/?retryWrites=true&w=majority")
        
        console.log("Conection success")
    } catch(err){
        console.log(err)
    }


}
module.exports = main