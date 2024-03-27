import MovieModel from "../models/MovieSchema.js";

const homeController =async(req,res)=>{
    res.render('index')
};

// create
const createController = async(req,res)=>{
    // console.log(req.body)
   const record = await MovieModel({
       moviename:req.body. moviename,
        movierating:req.body.movierating,
        moviereleasedate:req.body.moviereleasedate,
        movietype:req.body.movietype,
    });
    if(record){
       await record.save();
       console.log("Data saved..")

    }else{
        console.log("Data not saved!...")
    }
    res.render('index')
}


export {homeController, createController}