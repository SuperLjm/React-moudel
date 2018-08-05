import React, {Component} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

class City extends Component {
    constructor(props){
        super(props)
    }
    backFn () {
        this.props.history.push('/home')
    }
    

    render(){
        return (
            <div className = 'main'>
                 <header>
                    <div className='back-to' onClick={this.backFn.bind(this)}>返回</div>
                    分类头部
                </header>   
                <div className = 'content'>
                </div>
            </div>
        )
    }
}

export default City