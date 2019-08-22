import request from 'superagent';
import {BASE_URL, API_KEY, WORKSPACE} from '../constants';

export default async (table, data) => {
    const url = `${BASE_URL}/${WORKSPACE}/${table}`;

    try {
        const res = await request.post(url)
        .set( 'Authorization', "Bearer " + API_KEY)
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(data));
        
        return res.body;
        // res.body, res.headers, res.status
      } catch(err) {
          return { err };
        // err.message, err.response
      } 
}