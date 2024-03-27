import mongoose from "mongoose";
const MovieSchema = new mongoose.Schema({
    'movie name':{
        type:String,
        require:true,
    },
    'movie rating':{
        type:String,
        require:true,
    },
    'movie release date':{
        type:String,
        require:true,
    },
    'movie type':{
        type:String,
        require:true,
    }
});
const MovieModel = new mongoose.model('crud', MovieSchema);

export default MovieModel;