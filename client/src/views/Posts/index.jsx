import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './posts.css'
import { CgFeed } from 'react-icons/cg'
import { BiMessageMinus } from 'react-icons/bi'
import { AiFillCamera, AiOutlineSearch, AiOutlineSend, AiFillSave } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { FaUserEdit } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import Post from '../../components/Post'
import Notification from '../../components/Notification'
import { getMe, selectUserDetails, update, uploadAvatar } from '../../features/authentication/authenticationSlice'
import { createPost, getPosts, pushpost, refreshPost, selectPosts } from '../../features/posts/postsSlice'
import { io } from 'socket.io-client'
import { addcomstatus, selectChangedPost } from '../../features/comments/commentsSlice'

export default () => {

    //dispatch getMe + getPosts
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
        dispatch(getPosts())
    }, [])

    //selector userDetails
    const userDetails = useSelector(selectUserDetails)

    //display form after clicking on Edit button (by default is false = not shown)
    const [displayform, setdisplayform] = useState(false)

    //inputs of name + email of user
    const [name, setname] = useState(userDetails && userDetails.name)
    const [email, setemail] = useState(userDetails && userDetails.email)

    //upload avatar (image) of user
    const handleupload = (e) => {
        const data = new FormData()
        data.append('avatar', e.target.files[0])
        dispatch(uploadAvatar(data))
    }

    //update user infos (name + email)
    const updateuser = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            email: email
        }
        dispatch(update(data))
    }

    //create a image post
    const [postText, setpostText] = useState('')
    const [image, setimage] = useState(null)

    //display uploaded image
    const [imagedisplay, setimagedisplay] = useState(null)

    const handlepostimage = (e) => {
        setimage(e.target.files[0])
        setimagedisplay(URL.createObjectURL(e.target.files[0]))
    }

    //Create a whole post image+text
    const Create = () => {

        let data
        if (!image) {
            data = {
                text: postText
            }
            dispatch(createPost(data))
        }
        else {
            console.log('Failure, cant post');
        }
    }

    //Get all (posts selector)
    const posts = useSelector(selectPosts)

    //implement socket
    const socket = useRef()     //useRef Hook to save variable socket

    //Post
    useEffect(() => {
        socket.current = io("ws://localhost:4000")

        //socket create new post
        socket.current.on('newPost', post => {
            console.log('new post ', post)
            dispatch(pushpost({ post: post }))
        })
        //socket refresh post
        socket.current.on('refreshPost', newpost => {
            console.log('refreshPost', newpost)
            dispatch(refreshPost({ post: newpost }))
        })
    }, [])

    //Created post socket
    useEffect(() => {
        if (posts.createdPostsocket)
            socket.current.emit("addPost", posts.createdPostsocket);
    }, [posts.createdPostsocket])

    //affichage comments
    const changedpost = useSelector(selectChangedPost)

    useEffect(() => {
        if (posts.createdPostsocket)
            socket.current.emit("addPost", changedpost.changedPost);
    }, [changedpost.addcomment])

    //...
    const comstatus = useSelector(addcomstatus)

    useEffect(() => {
        console.log('i am sending')
        socket.current.emit("PostChanged", changedpost.changedPost)
    }, [comstatus])



    return (
        <div className="posts">
            <div className="leftsider">

                <div className="topsider" class="sticky">
                    <div className="avatar">
                        {
                            userDetails
                            &&
                            <img
                                className='avatar_image'
                                src={"http://localhost:5000/images/" + userDetails.avatar}
                                alt=""
                            />
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
                    <button
                        style={{ background: "white" }}
                        className='edit_button'
                        onClick={() => setdisplayform(!displayform)}>
                        {
                            displayform
                                ?
                                <p><ImCancelCircle /> Cancel</p>
                                :
                                <p><FaUserEdit /> Edit</p>
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
                            <form
                                onSubmit={updateuser}
                                className='edituser'>
                                <img
                                    src={"http://localhost:5000/images/" + userDetails.avatar}
                                    alt=""
                                />
                                <AiFillCamera
                                    className='uploadcamera'
                                    onClick={() => document.getElementById('upload').click()}
                                />
                                <input
                                    type="file"
                                    id='upload'
                                    onChange={(e) => handleupload(e)}
                                    hidden
                                />
                                {
                                    userDetails
                                    &&
                                    <>
                                        <input
                                            type="text"
                                            placeholder='Change your name'
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder='Change your email'
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)}
                                        />
                                    </>
                                }
                                <button
                                    type='submit'
                                    className='submit'
                                > <AiFillSave /> Save
                                </button>
                                <span>status</span>
                            </form>
                        </>
                        :
                        <>
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder='Search . . .' />
                                <AiOutlineSearch className='searchicon' />
                            </div>

                            <div className="createPost">
                                {
                                    userDetails
                                    &&
                                    <img
                                        className='createFormAvatar'
                                        src={"http://localhost:5000/images/" + userDetails.avatar}
                                        alt=""
                                    />
                                }
                                <input
                                    type="text"
                                    placeholder='Write a post'
                                    value={postText}
                                    onChange={(e) => setpostText(e.target.value)}
                                />
                                <input
                                    type="file"
                                    id="postimage"
                                    onChange={(e) => handlepostimage(e)}
                                    accept="image/*"
                                    hidden
                                />
                                <div
                                    style={{
                                        display: "flex"
                                    }}>
                                    <HiOutlinePhotograph className='imagebtn'
                                        style={{
                                            cursor: "pointer",
                                            marginRight: "10px",
                                            color: "#F58C56",
                                            fontSize: "40px"
                                        }}
                                        onClick={() => document.getElementById("postimage").click()}
                                    />
                                    <button
                                        onClick={Create}
                                        style={{
                                            borderRadius: "10px",
                                            width: "70px",
                                            outline: "none",
                                            border: "1px solid lightgray",
                                            background: "#F1F0EE",
                                            height: "40px",
                                            fontSize: "20px",
                                            color: "white",
                                            backgroundColor: "#726AE3"
                                        }}>
                                        <AiOutlineSend />
                                    </button>
                                </div>
                            </div>
                            {
                                imagedisplay
                                &&
                                <>
                                    <img
                                        src={imagedisplay}
                                        style={{
                                            height: '300px',
                                            width: '50%',
                                            borderRadius: '15px',
                                            marginTop: '3%'
                                        }}
                                    />
                                </>
                            }
                            <div
                                style={{
                                    marginTop: '30px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                <span
                                    style={{
                                        marginRight: '20px',
                                        fontWeight: 'bold'
                                    }}>
                                    Display :
                                </span>
                                <button
                                    style={{
                                        border: '1px solid #726AE3',
                                        borderRadius: '100px',
                                        background: '#726AE3',
                                        padding: '10px',
                                        boxShadow: '5px 5px 13px -3px rgba(0,0,0,0.87)'
                                    }}>
                                    All posts
                                </button>
                                <button
                                    style={{
                                        marginLeft: '15px',
                                        border: '1px solid #726AE3',
                                        borderRadius: '100px',
                                        background: '#726AE3',
                                        padding: '10px',
                                        boxShadow: '5px 5px 13px -3px rgba(0,0,0,0.87)'
                                    }}>
                                    My posts
                                </button>
                            </div>
                            <hr />

                            {
                                posts.posts.map((post) => {
                                    return (
                                        <Post
                                            post={post}
                                        />
                                    )
                                })
                            }

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