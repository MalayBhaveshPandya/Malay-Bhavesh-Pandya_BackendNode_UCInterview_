const express=require('express');
const router=express.Router();
const showController=require('../controllers/showController');
router.get('/show-details',showController.getShowDetails);
router.get('/episodes',showController.getEpisodes);
module.exports=router;