import fetchJsonp from 'fetch-jsonp'
import {KIND_MENU, KIND_LIST} from '@/server/index.js'

export default {
    getKindMenu (cb) {
        var kindmenu = localStorage.kindmenu
        if(kindmenu){
            var data = JSON.parse(kindmenu) // 将一个json字符串转变为对象
            cb(data)
            return
        }
        fetch(KIND_MENU)
        .then(res => res.json())
        .then(data => {
            localStorage.kindmenu = JSON.stringify(data)
            cb(data)
        })
        .catch(err => console.log(err))
    },
    getkindlist (classID, cb) {
        fetchJsonp(KIND_LIST + '?classID=' + classID)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.log(err))
    }
}