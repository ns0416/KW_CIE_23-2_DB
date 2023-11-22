import React from 'react';
import {Link} from 'react-router-dom';

export default function Mainpage() {
    const [isLoggedIn, setisLoggedIn] = React.useState(false);
    return(
        <div>
            <h3>this is main page</h3>
            <Link to='/myLeftPage' state={{isLoggedIn: isLoggedIn}}>마이페이지</Link>
            <Link to='/test'>테스트페이지</Link>
        </div>

    );
}

