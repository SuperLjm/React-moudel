import React, {Component} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

class User extends Component {
    constructor(props){
        super(props)
    }

    clearUser(){
        localStorage.setItem('isLogin', 0)
        localStorage.setItem('userID', '')
        this.props.history.push('/')
    }

    render(){
        var str = ''
        if(localStorage.getItem('isLogin') == 1){
            str = <div>
                        欢饮您，{localStorage.getItem('userID')}
                        <button onClick={this.clearUser.bind(this)}>注销</button>
                  </div>
        }else{
            str = <div>
                    <Link to = '/login'><button>登陆</button></Link>
                    <Link to = '/register'><button>注册</button></Link>
                  </div>
        }
        return (
            <div className = 'main'>
                <header>我的头部</header>
                <div className = 'content'>
                    {str}
                </div>
            </div>
        )
    }
}

export default User