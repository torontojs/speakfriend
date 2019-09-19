import request from 'superagent';
import {CLOUDINARY_UPLOAD_PRESET,
        CLOUDINARY_UPLOAD_PRESET_PHOTO,
        CLOUDINARY_UPLOAD_URL, 
        CLOUDINARY_API_KEY } from '../constants';

export default async (file, name, photo = false) => {
    name = name.substring(0, name.lastIndexOf('.'));
    const uploadPreset =  photo ? CLOUDINARY_UPLOAD_PRESET_PHOTO : CLOUDINARY_UPLOAD_PRESET; 

    try {
        const res = await request.post(CLOUDINARY_UPLOAD_URL)
                    .field('upload_preset', uploadPreset)
                    .field('api_key', CLOUDINARY_API_KEY)
                    .field('public_id', name)
                    .field('file', file);
        
        return res.body;
    
    } catch(err) {
        console.error(err);
        return { err };
    } 
}