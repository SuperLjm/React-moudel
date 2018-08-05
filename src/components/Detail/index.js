import React, {Component} from 'react'
import detailapi from '@/api/detail.js'

import './style.scss'

class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            goodsName: '',
            className: '',
            price: '',
            number: '',
            goodsListImg: ''
        }
    }
    componentDidMount() {
        // console.log(this.props.match.params.goodsID)
        const goodsID = this.props.match.params.goodsID
        detailapi.getDetialdata(goodsID, ({goodsName,className,price,number,goodsListImg}) => {
            this.setState({
                goodsName,className,price,number,goodsListImg
            })
        })
    }

    backFn () {
        this.props.history.goBack()
    }

    render(){
        return (
            <div className = 'main'>
                <header><div className='back-to' onClick={this.backFn.bind(this)}>返回</div>详情页头部</header>
                <div className = 'content'>
                    <img src = {this.state.goodsListImg} alt='' />
                    {this.state.goodsName}
                </div>
            </div>
        )
    }
}

export default Detail