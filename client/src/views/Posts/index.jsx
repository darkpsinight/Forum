import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './posts.css'
import { CgFeed } from 'react-icons/cg'
import { BiMessageMinus } from 'react-icons/bi'
import { AiFillCamera, AiOutlineSearch } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { IoIosShareAlt } from 'react-icons/io'
import Post from '../../components/Post'
import Notification from '../../components/Notification'
import { getMe, selectUserDetails, update, uploadAvatar } from '../../features/authentication/authenticationSlice'

export default () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [])

    const userDetails = useSelector(selectUserDetails)

    const [displayform, setdisplayform] = useState(false)

    const [name, setname] = useState(userDetails && userDetails.name)
    const [email, setemail] = useState(userDetails && userDetails.email)

    const handleupload = (e) => {
        const data = new FormData()
        data.append('avatar', e.target.files[0])
        dispatch(uploadAvatar(data))
    }

    const updateuser = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            email: email
        }
        dispatch(update(data))
    }

    return (
        <div className="posts">
            <div className="leftsider">

                <div className="topsider" class="sticky">
                    <div className="avatar">
                        {
                            userDetails
                            &&
                            <img className='avatar_image' src={"http://localhost:5000/images/" + userDetails.avatar} alt="" />
                        }
                    </div>
                    <div className='name'>
                        <h5>
                            {
                                userDetails
                                &&
                                userDetails.name
                            }
                        </h5>
                    </div>

                    <div>
                        <h6>
                            {
                                userDetails
                                &&
                                userDetails.email
                            }
                        </h6>
                    </div>
                    <hr />
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
                    <button className='edit_button' onClick={() => setdisplayform(!displayform)}>
                        {
                            displayform
                                ?
                                <p>Cancel</p>
                                :
                                <p>Edit</p>
                        }
                    </button>
                </div>
            </div>
            <div className="mainContent">

                {
                    displayform
                        ?
                        <>
                            <h3>Edit User Details :</h3>
                            <form onSubmit={updateuser} className='edituser'>
                                <img src={"http://localhost:5000/images/" + userDetails.avatar} alt="" />
                                <AiFillCamera className='uploadcamera' onClick={() => document.getElementById('upload').click()} />
                                <input type="file" id='upload' onChange={(e) => handleupload(e)} hidden />
                                {
                                    userDetails
                                    &&
                                    <>
                                        <input type="text" placeholder='Change your name' value={name} onChange={(e) => setname(e.target.value)} />
                                        <input type="text" placeholder='Change your email' value={email} onChange={(e) => setemail(e.target.value)} />
                                    </>
                                }
                                <button type='submit'>Save</button>
                                <span>status</span>
                            </form>
                        </>
                        :
                        <>
                            <div className="search">
                                <input type="text" placeholder='Search . . .' />
                                <div>
                                    <AiOutlineSearch className='searchicon' />
                                    <button>
                                        <IoIosShareAlt />
                                    </button>
                                </div>
                            </div>

                            <div className="createPost">
                                {
                                    userDetails
                                    &&
                                    <img className='createFormAvatar' src={"http://localhost:5000/images/" + userDetails.avatar} alt="" />
                                }
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
                <Notification />
            </div>
        </div>
    )
}