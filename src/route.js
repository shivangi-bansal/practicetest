import React, { Component } from 'react';
import About from './scrren/about';
import Home from './scrren/home';
import Sign from './scrren/sign';
import NotFound from './scrren/notFound';
import { Router, Route, browserHistory} from 'react-router';
class AppRoutes extends Component {
    render() {
        return (

<Router history = {browserHistory}>
<Route exact path="/" component={Home}/>
<Route path='/home' component={Home} />
<Route path='/about' component={About} />
<Route path='/sign' component={Sign} />
<Route path='*' component={NotFound} />



</Router>
        )
    }
}
export default AppRoutes;