import React from 'react';
import {Link} from 'react-router';
const Home = () => (
    <div>
        <h1>Links</h1>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/sign"}>Sign</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            
        </ul>
    </div>
)
export default Home;