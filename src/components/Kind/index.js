import React, {Component} from 'react'
import './style.scss'
import kindapi from '@/api/kind.js'
import store from '@/store/index.js'
import {Link, NavLink} from 'react-router-dom'

class Kind extends Component {

    backFn () {
        this.props.history.push('/home')
    }
    componentDidMount(){
        kindapi.getKindMenu((data) => {
            store.dispatch({
                type: 'KIND_MENU',
                data
            })
        })
        var classID = this.props.match.params['classID']
        this.getdata(classID)
    }

    componentWillReceiveProps(nextProps){
        var classID = nextProps.match.params['classID']
        this.getdata(classID)
    }  

    getdata(classID) {
        kindapi.getkindlist(classID, (data) => {
            store.dispatch({
                type: 'KIND_LIST',
                data
            })
        })
    }

    render(){
        // console.log(store.getState().kinddata.kindlist)
        var kindlist = store.getState().kinddata.kindlist
        // console.log(store.getState().kinddata.kindmenu)
        var kindmenu = store.getState().kinddata.kindmenu
        var arr = []
        var list = []
        // 分类左
        kindmenu.map((item) => {
            arr.push(
                    <li key = {item.classID}>
                        <NavLink to={'/kind/' + item.classID}>{item.className}</NavLink>
                    </li>
            )
        })
        // 分类右
        if(kindlist == 0){
            list = '暂无数据'
        }else{
            kindlist.map((item, index) => {
                list.push(
                    <Link key = {index} to = {'/detail/' + item.goodsID}>
                        <li>
                            <img src = {item.goodsListImg} alt='' />
                            {item.goodsName}
                        </li>
                    </Link>
                )
            })
        }
        return (
            <div className = 'main'>
                <header>
                    <div className='back-to' onClick={this.backFn.bind(this)}>返回</div>
                    分类头部
                </header>
                <div className = 'content kindContent'>
                    <ul className = 'kindMenu'>
                        {arr}
                    </ul>
                    <ul className = 'kindList'>
                        {list}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Kind