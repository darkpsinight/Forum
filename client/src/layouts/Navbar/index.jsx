import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'

export default () => {

    const { isauth } = useContext(AuthContext)

    return (
        <>
            {/* ***** Header Area Start ***** */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <Link to='/' className='logo'><img src='assets/images/logo-v1.png' /></Link>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li className='scroll-to-section'><Link to='/' className='active'>Home</Link></li>
                                    <li className='scroll-to-section'><Link to='/profile'>Profile</Link></li>
                                    <li className='scroll-to-section'><Link to='/posts'>Posts</Link></li>
                                    {
                                        isauth
                                            ?
                                            <li className="scroll-to-section"><div className="border-first-button"><Link to='/logout' >logout</Link></div></li>
                                            :
                                            <>
                                                <li className='scroll-to-section'><Link to='/login'>Login</Link></li>
                                                <li className='scroll-to-section'><Link to='/register'>Register</Link></li>
                                            </>
                                    }
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