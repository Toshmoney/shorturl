const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const urlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    shorten:{
        type:String
    },
    clicks:{
        type:Number,
        default:0
    }
}, {
    timestamps: true
});

const urlModel = model("Url", urlSchema);

module.exports = urlModel;
