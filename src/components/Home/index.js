import React, {Component} from 'react'
import './style.scss'
// import homeapi from '@/api/home.js'
// import store from '@/store/index.js'
import headImg from './header-logo.png'
// import store from '@/store/index.js'
import { Carousel, WingBlank,Button } from 'antd-mobile'
import {Link} from 'react-router-dom'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [{imgSrc: '1'}, {imgSrc: '2'}, {imgSrc: '3'}, {imgSrc: '4'}],
            imgHeight: 176,
            color: '',
            flag: false,
            city: true,
            dat: [{imgSrc: '1'}, {imgSrc: '2'}, {imgSrc: '3'}, {imgSrc: '4'}, {imgSrc: '5'}]
        }
    }

    componentDidMount(){

        this.refs.color1.style.color = '#f00'
        setTimeout(() => {
            this.setState({
              data: [
                    {
                        imgSrc: 'https://image.xiaozhustatic2.com/00,675,500/15,0,93,10309,675,500,90c6e9cf.jpg',
                        city: '西双版纳—雨林之家，听鸟语，闻花香',
                        price: '￥358/晚'
                    }, 
                    {
                        imgSrc: 'https://image.xiaozhustatic1.com/00,675,500/15,0,52,10371,675,500,5af4775d.jpg',
                        city: '兰州—景现明窗玉帘外，趺坐蒲团诵黄老',
                        price: '￥368/晚'
                    }, 
                    {
                        imgSrc: 'https://image.xiaozhustatic2.com/00,675,500/15,0,69,10193,675,500,7a3d3661.jpg',
                        city: '深圳—浪漫艺术屋，柔情少女梦',
                        price: '￥499/晚'
                    },
                    {
                        imgSrc: 'https://image.xiaozhustatic2.com/00,675,500/15,0,26,10445,675,500,7ba8ac05.jpg',
                        city: '西双版纳—雨林之家，听鸟语，闻花香',
                        price: '￥498/晚'    
                    }
                ],
                dat: [
                    {
                        imgSrc: 'https://image.xiaozhustatic1.com/22/9,0,77,12915,270,270,ff52bc1f.jpg',
                        textSrc: '房东：Niccolo_CQ',
                        introduce: '昨天的小姐姐告诉我说给我买了点心，我打开房门就看到摆放在桌上的盒子，打开一看，是我爱吃的核桃酥和蛋黄酥。她还在小本本上写下了她的住宿体验...'    
                    },
                    {
                        imgSrc: 'https://image.xiaozhustatic1.com/22/14,0,62,2808,375,376,acf396e1.jpg',
                        textSrc: '房东：周周小家',
                        introduce: '做民宿有一段时间了，接待了很多客人，见识了不同的人生。至今仍然记得迎来的第一个住客，我紧张兮兮的把密码发给她，她退房后给我写了很长的好评，那...'
                    }, 
                    {
                        imgSrc: 'https://tfsimg.alipay.com/images/partner/T1gUFfXXxgXXXXXXXX',
                        textSrc: '房东：小小猪倌',
                        introduce: '从一个住客转为一名房东，在这两年多的时间里充满了喜悦，也充满了布置小窝时的小累小困，但每一次赢得住客们的肯定时总是欢欣鼓舞。民宿最动人的部分...'
                    }, 
                    {
                        imgSrc: 'https://image.xiaozhustatic2.com/22/15,0,40,1129,329,329,5583af4d.jpg',
                        textSrc: '房东：思思小酱',
                        introduce: '最近几个月有很多决定和行动，经常出差，出差的日子都被限制在一个个酒店和行李箱里。每次回到家，看到养了多年的植物，像一滩泥巴贴在沙发上，就觉得...'
                    },
                    {
                        imgSrc: 'https://image.xiaozhustatic3.com/22/3,0,66,5817,331,331,da655d48.jpg',
                        textSrc: '房东：苹果树央央',
                        introduce: '在一个习习微风的下午接到了一家人，爸爸妈妈和两个漂亮的宝贝，还有奶奶。男主很帅，女主很干练，大女儿特别好看，有着大眼睛和瓜子脸。入住结束后，...'    
                    }
                ]
            });
          }, 100);
    }
    click(){
        this.refs.color1.style.color = '#f00'
        this.refs.color2.style.color = '#000'
        this.setState({
            city: true,
        })
    }

    clic(){
        this.refs.color2.style.color = '#f00'
        this.refs.color1.style.color = '#000'
        this.setState({
            city: false,
        })
    }

    dian(){
        var flag = this.state.flag
        this.setState({
            flag: !flag
        })
    }

    login(){
        this.props.history.push('/login')
    }

    register(){
        this.props.history.push('/register')
    }

    render(){
        // console.log(this.state.data)
        const styleSou = {background: '#f05b72', color: '#ffffff', fontSize: '16px'}
        const style = { textAlign: 'left', fontSize: '14px', paddingLeft: '8px', color: '#7e7e7e' }
        var str = ""
        var city = ''
        if(this.state.flag){
            str = <div className='header-rig slideInDown' ref = 'loginregister'>
                    <div className = 'login' onClick={this.login.bind(this)}>登陆</div>
                    <hr />
                    <div className = 'login' onClick={this.register.bind(this)}>注册</div>
                  </div>
        }else {
            str = ""
        }
        if(this.state.city){
            
            city = <div className='tex'>
                        <Button style={style}>城市或目的地 <span></span></Button>
                        <Button style={style}>入住离开日期</Button>
                        <Button style = {styleSou}>搜索</Button>
                   </div>
        }else{
            city = <div className='tex'>
                    <Button style={style}>城市</Button>
                    <Button style={style}>入住离开日期</Button>
                    <Button style = {styleSou}>搜索</Button>
                   </div>
        }
        return (
            <div className = 'home'>
                    <header>
                        <Link to = '/'><img src = {headImg} /></Link>
                        <div className='header-content'></div>
                        <div className='header-right' onClick={this.dian.bind(this)}>
                                三
                                {str}
                        </div>
                    </header>
                    <div className='content'>
                        <div className='bannerr'>
                        <WingBlank>
                            <Carousel
                            autoplay={true}
                            infinite
                            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            // afterChange={index => console.log('slide to', index)}
                            >
                            {this.state.data.map((item, index) => (
                                <a
                                key={index}
                                href="#"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                <img
                                    src={item.imgSrc}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                <div className='city'>
                                    <div className='patth'>{item.city}</div>
                                    <div className='price'>{item.price}</div>
                                </div>
                                </a>
                            ))}
                            </Carousel>
                        </WingBlank>
                        </div>
                        <div className='location'>
                            <a className='left-location' onClick={this.click.bind(this,)} ref='color1'>国内</a>
                                <span>|</span>
                            <a className='right-location' onClick={this.clic.bind(this,)} ref='color2'>海外</a>
                        </div>
                        <div className='teex'>
                            {city}
                        </div>
                    </div>
                    <footer>
                        <div className='jinhua'><span>精华短租日记</span></div>
                            <div className='banner-bottom'>
                                <WingBlank>
                                    <Carousel
                                    autoplay={true}
                                    infinite
                                    autoplayInterval= {10000}
                                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                    afterChange={index => console.log('slide to', index)}
                                    >
                                    {this.state.dat.map((val, index) => (
                                        <div key = {index} className='swer'>
                                           <div className='imgage'>
                                           <img
                                                    src={val.imgSrc}
                                                    alt=""
                                                    style={{ width: '100%', verticalAlign: 'top' }}
                                                    onLoad={() => {
                                                    // fire window resize event to change height
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                    }}
                                                />
                                                <div className='fang'>{val.textSrc}</div>
                                           </div>
                                           <p>{val.introduce}</p>
                                        </div>  
                                    ))}
                                    </Carousel>
                                </WingBlank>
                            </div>
                    </footer>
            </div>
        )
    }
}

export default Home
// {
//     this.state.dat.map((item, index) => (
//         <li key = {index}>
//             <img src={item.imgSrc} />
//         </li>
//     ))
// }