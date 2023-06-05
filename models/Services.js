const mongoose = require("mongoose")
const {Schema} = mongoose;

const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {timestamps: true}
)
const Service = mongoose.model("Service", ServiceSchema)

module.exports ={
    Service,
    ServiceSchema
}