import {REGISTER_URL} from '@/server/index.js'

export default {
    submitData ({status, userID, password}, cb){
        fetch(REGISTER_URL + '?status=' + status + '&userID=' + userID + '&password=' + password)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.log(err))
    }
}