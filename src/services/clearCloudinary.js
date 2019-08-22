import request from 'superagent';
import { 
CLOUDINARY_UPLOAD_PRESET, 
CLOUDINARY_API_KEY, 
CLOUDINARY_DELETE_BY_TOKEN_URL } from '../constants';

export default async (deleteToken) => {

    try {
        const res = await request.post(CLOUDINARY_DELETE_BY_TOKEN_URL)
                    .field('token', deleteToken)
                    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                    .field('api_key', CLOUDINARY_API_KEY);
        
        return res;
  
    } catch(err) {
        console.error(err);
        return { err };
    } 
}




