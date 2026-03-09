const express = require("express");
const router = express.Router();
const Trainer = require("../models/Trainer");
const multer = require("multer");

const storage = multer.diskStorage({

 destination: function(req,file,cb){
   cb(null,"uploads/")
 },

 filename: function(req,file,cb){
   cb(null, Date.now() + "-" + file.originalname)
 }

});

const upload = multer({storage:storage});

router.post("/trainer", upload.single("photo"), async (req,res)=>{

const trainer = new Trainer({

   name:req.body.name,
   skills:req.body.skills,
   photo:req.file.filename

 });

 await trainer.save();

 res.json(trainer);

});

router.get("/trainer", async(req,res)=>{

 const trainers = await Trainer.find();

 res.json(trainers);

});

module.exports = router;