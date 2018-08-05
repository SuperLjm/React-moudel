import fetchJsonp from 'fetch-jsonp'
import {HOME_LIST_URL} from '@/server/index.js'

export default {
    getHomelist(cb){
        fetchJsonp(HOME_LIST_URL)
        .then(res => res.json())
        .then(data => cb(data))
        .catch( err => console.log(err))
    }
}