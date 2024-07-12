const urlModel = require("../models/url");
const { generateRandomLetters } = require("../utils/randomString");

const createNewShort = async(req, res)=>{
    if(req.body.url){
        req.body.url = req.body.url.toLowerCase()
    }
    const {url} = req.body;
    if(!url){
        return res.status(404).json({error:"url is required!"})
    }

    const generateRandom = generateRandomLetters(5);

    const shortenedUrl = await urlModel.create({
        url,
        shorten: generateRandom
    })

    if(!shortenedUrl){
        return res.json({error:"something went wrong!"})
    }

    return res.status(201).json({message:"Successfully shortened new url", success:true, shorturl: "https://shorturl-ovln.onrender.com/"+ shortenedUrl.shorten})

}

const getUrl = async(req, res)=>{
    const shortUrl = await urlModel.findOne({ shorten: req.params.shorten })
  if (shortUrl == null) return res.status(404).json({error:"Sorry this link is not available in our database"})

  shortUrl.clicks++
  await shortUrl.save()

  res.redirect(shortUrl.url)
}

module.exports = {
    createNewShort,
    getUrl
}