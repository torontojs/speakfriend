const dotenv = require('dotenv');
dotenv.config();

export const BASE_URL = 'https://api.airtable.com/v0'
export const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
export const WORKSPACE = process.env.REACT_APP_AIRTABLE_WORKSPACE
export const CLOUDINARY_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY
export const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
export const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/
                ${process.env.REACT_APP_CLOUDINARY_APP_NAME}/image/upload`
export const CLOUDINARY_DELETE_BY_TOKEN_URL = `https://api.cloudinary.com/v1_1/
${process.env.REACT_APP_CLOUDINARY_APP_NAME}/delete_by_token`