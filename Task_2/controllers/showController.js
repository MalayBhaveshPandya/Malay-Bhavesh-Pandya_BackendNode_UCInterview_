const axios=require('axios');
const BASE_URL='https://api.tvmaze.com';
let cachedShowID=null;
exports.getShowDetails=async(req,res)=>{
    try{
        const response=await axios.get(`${BASE_URL}/singlesearch/shows?q=friends`);
        cachedShowID=response.data.id;
        res.status(200).json(response.data);
    }catch(error){
        res.status(500).json({error:"Something went wrong!"});
    }
};
exports.getEpisodes=async(req,res)=>{
    try{
        if(!cachedShowID){
            const showResponse=await axios.get(`${BASE_URL}/singlesearch/shows?q=friends`);
            cachedShowID=response.data.id;
        }
        const response=await axios.get(`${BASE_URL}/shows/${cachedShowID}/episodes`);
        res.status(200).json(response.data);
    }catch(error){
        res.status(500).json({error:"Something went wrong!"});
    }
};