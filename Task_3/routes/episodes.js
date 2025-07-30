const express=require('express');
const router=express.Router();
const Episode=require('../models/Schema.js');

router.post('/',async(req,res)=>{
    try{
        const newEp=new Episode(req.body);
        await newEp.save();
        res.status(201).json(newEp);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

router.get('/',async(req,res)=>{
    const episodes=await Episode.find();
    res.json(episodes);
});

router.get('/:id',async(req,res)=>{
    const ep=await Episode.findOne({id:req.params.id});
    if(!ep) return res.status(404).json({error:"Episode not found"});
    res.json(ep);
});

router.get('/season/:seasonNumber',async(req,res)=>{
    const eps=await Episode.find({season:req.params.seasonNumber});
    res.json(eps);
});

router.get('/season/:seasonNumber/episode/:episodeNumber',async(req,res)=>{
    const ep=await Episode.findOne({
        season:req.params.seasonNumber,
        number:req.params.episodeNumber
    });
    if(!ep) return res.status(404).json({error:'Episode not Found:('});
    res.json(ep);
});

module.exports=router;