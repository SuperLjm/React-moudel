import fetchJsonp from 'fetch-jsonp'
import { DETAIL_URL } from '@/server/index.js'

export default {
    getDetialdata (goodsID, cb) {
        fetchJsonp(DETAIL_URL + '?goodsID=' + goodsID)
        .then(res => res.json())
        .then(data => cb(data[0]))
        .catch(err => console.log(err))
    }
}