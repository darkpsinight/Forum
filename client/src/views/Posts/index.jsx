import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './posts.css'
import avatar from '../../assets/img/avatar.jpg'
import { CgFeed } from 'react-icons/cg'
import { BiMessageMinus } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'
import Post from '../../components/Post'
import Notification from '../../components/Notification'
import { getMe, selectUserDetails } from '../../features/authentication/authenticationSlice'

export default () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [])

    const userDetails = useSelector(selectUserDetails)

    const [displayform, setdisplayform] = useState(false)

    return (
        <div className="posts">
            <div className="leftsider">

                <div className="topsider" class="sticky">
                    <div className="avatar">
                        <img className='avatar' src={avatar} alt="" />
                    </div>
                    {/* <h5>username</h5> */}
                    <h5>{userDetails && userDetails.name}</h5>
                    <hr />
                    {/* <h6>Email@email.com</h6> */}
                    <h6>{userDetails && userDetails.email}</h6>
                    <div className="statistics">
                        <ul>
                            <li>
                                <div>
                                    <CgFeed className='icon' />
                                    <span>Posts:</span>
                                </div>
                                <span>22</span>
                            </li>
                            <li>
                                <div>
                                    <BiMessageMinus className='icon' />
                                    <span>Comments:</span>
                                </div>
                                <span>22</span>
                            </li>
                        </ul>
                    </div>
                    <button className='edit_button' onClick={()=>setdisplayform(true)}>Edit</button>
                </div>
            </div>
            <div className="mainContent">

                {
                    displayform
                        ?
                        <p>form</p>
                        :
                        <>
                            <div className="search">
                                <input type="text" placeholder='Search...' />
                                <AiOutlineSearch className='searchicon' />
                            </div>

                            <div className="createPost">
                                <img src={avatar} className='createFormAvatar' alt="" />
                                <input type="text" placeholder='Write a post' />
                                <HiOutlinePhotograph className='imagebtn' />
                            </div>
                            <hr />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                        </>
                }
                
            </div>

            <div className="notifications">
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </div>
    )
}