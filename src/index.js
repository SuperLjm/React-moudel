import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, Route, HashRouter} from 'react-router-dom'
import rootRoutes from '@/router/rootRoutes.js'
import store from '@/store/index.js'

function render(){
    ReactDOM.render(
        <HashRouter>
            <Switch>
                {
                    rootRoutes.map((item, index) => (
                            <Route key = {index} path = {item.path} component = {item.component} />
                    ))
                }
                <Route path = '/' component = {App}/> 
            </Switch>  
        </HashRouter>
        , document.getElementById('root')
    )
}
render()
store.subscribe(render)
registerServiceWorker();
