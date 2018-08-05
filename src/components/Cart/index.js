import React, {Component} from 'react'
import './style.scss'

class Cart extends Component {

    render(){
        return (
            <div className = 'main'>
                <header>购物车头部</header>
                <div className = 'content'>
                    购物车内容
                </div>
            </div>
        )
    }
}

export default Cart