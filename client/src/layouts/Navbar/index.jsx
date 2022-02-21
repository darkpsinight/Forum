import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

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
                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo-v1.png" />
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
                                    <li className="scroll-to-section"><a href="/profile">Profile</a></li>
                                    <li className="scroll-to-section"><a href="/posts">Posts</a></li>
                                    <li className="scroll-to-section"><a href="/login">Login</a></li>
                                    <li className="scroll-to-section"><a href="/register">Register</a></li>
                                    <li className="scroll-to-section"><div className="border-first-button"><a href="/logout">Logout</a></div></li>
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