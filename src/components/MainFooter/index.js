import React, {Component} from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

class MainFooter extends Component {

    render(){
        return (
            <footer>
                <ul>
                    <li>
                        <NavLink to='/home'>
                            首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/kind/1'>
                            分类
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            购物车
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/user'>
                            我的
                        </NavLink>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default MainFooter