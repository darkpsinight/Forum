import React, { useContext } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import { logout } from '../../features/authentication/authenticationSlice';

export default () => {

    const { isauth } = useContext(AuthContext)
    const dispatch = useDispatch()

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
                                    {
                                        isauth
                                        &&
                                        <>
                                        <li className='scroll-to-section'><Link to='/profile'>Profile</Link></li>
                                        <li className='scroll-to-section'><Link to='/posts'>Posts</Link></li>
                                        </>
                                    }
                                    {
                                        isauth
                                            ?
                                            <li className="scroll-to-section" onClick={()=> dispatch(logout())}><div className="border-first-button"><Link to='/logout' >Logout</Link></div></li>
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