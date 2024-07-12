const urlModel = require("../models/url");
const { generateRandomLetters } = require("../utils/randomString");

const createNewShort = async(req, res)=>{
    if(req.body.url){
        req.body.url = req.body.url.toLowerCase()
    }
    const {url} = req.body;
    if(!url){
        res.status(404).json({error:"url is required!"})
    }

    const generateRandom = generateRandomLetters(5);

    const shortenedUrl = await urlModel.create({
        url,
        shorten: generateRandom
    })

    if(!shortenedUrl){
        return res.json({error:"something went wrong!"})
    }

    return res.status(201).json({message:"Successfully shortened new url", success:true, shortenedUrl})

}


module.exports = {
    createNewShort
}