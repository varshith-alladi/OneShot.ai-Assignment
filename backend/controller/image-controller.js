// import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000';


export const uploadImage = (req, res) => {
    if(!req.file) 
        return res.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${req.file.filename}`;

    res.status(200).json(imageUrl); 
}


export const getImage = (req, res) => {
    
}