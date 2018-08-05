import React, {Component} from 'react'
import './style.scss'
import registerapi from '@/api/user.js'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            str: ''
        }
    }

    changeID(){
        var userID = this.refs.userID.value
        if (userID.length < 5) {
            this.setState({
                str: '×'
            })
        } else {
            this.setState({
                str: '√'
            })
        }
        if (userID == '') {
            this.setState({
                str: ''
            })
        }
    }

    clear(type){
        this.refs[type].value = ''
        this.setState({
            str: ''
        })
    }

    register(){
        var status = 'login'
        var userID = this.refs.userID.value
        var password = this.refs.password.value
        registerapi.submitData({status, userID, password},(data) => {
            if (data==0) {
                alert('该用未注册')
                this.props.history.push('/register')
            }else if(data == 0){
                alert('密码错误')
            }else{
                localStorage.setItem('isLogin', 1)
                localStorage.setItem('userID', userID)
                this.props.history.push('/user')
            }
        })
    }

    render(){
        return (
            <div className = 'main'>
                <header>登陆头部</header>
                <div className = 'content'>
                    <input type = 'text' placeholder = '请输入您的用户名' onChange={this.changeID.bind(this)}  ref = 'userID' />{this.state.str} <span onClick = {this.clear.bind(this, 'userID')}>删除</span>
                    <br/>
                    <input type = 'password' placeholder = '请输入您的密码' ref = 'password' /><span onClick = {this.clear.bind(this, 'password')}>删除</span>
                </div>
                <button onClick={this.register.bind(this)}>登陆</button>
            </div>
        )
    }
}

export default Login