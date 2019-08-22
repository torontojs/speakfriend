import request from 'superagent';
import {CLOUDINARY_UPLOAD_PRESET, 
        CLOUDINARY_UPLOAD_URL, 
        CLOUDINARY_API_KEY } from '../constants';

export default async (file) => {

    try {
        const res = await request.post(CLOUDINARY_UPLOAD_URL)
                    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                    .field('api_key', CLOUDINARY_API_KEY)
                    .field('file', file);
        
        return res.body;
    
    } catch(err) {
        console.error(err);
        return { err };
    } 
}