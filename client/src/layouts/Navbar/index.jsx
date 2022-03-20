import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <>
            {/* ***** Header Area Start ***** */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                {/* <a href="index.html" className="logo">
                                    <img src="assets/images/logo-v1.png" />
                                </a> */}
                                <Link to='/' className='logo'><img src='assets/images/logo-v1.png' /></Link>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li className='scroll-to-section'><Link to='/' /* className='active' */>Home</Link></li>
                                    <li className='scroll-to-section'><Link to='/profile' /* className='active' */>Profile</Link></li>
                                    <li className='scroll-to-section'><Link to='/posts' /* className='active' */>Posts</Link></li>
                                    <li className='scroll-to-section'><Link to='/login' /* className='active' */>Login</Link></li>
                                    <li className='scroll-to-section'><Link to='/register' /* className='active' */>Register</Link></li>
                                    <li className="scroll-to-section"><div className="border-first-button"><Link to='/logout' className='active'>logout</Link></div></li>
                                    {/* <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
                                    <li className="scroll-to-section"><a href="/profile">Profile</a></li>
                                    <li className="scroll-to-section"><a href="/posts">Posts</a></li>
                                    <li className="scroll-to-section"><a href="/login">Login</a></li>
                                    <li className="scroll-to-section"><a href="/register">Register</a></li>
                                    <li className="scroll-to-section"><div className="border-first-button"><a href="/logout">Logout</a></div></li> */}
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}

        </>
    )
}