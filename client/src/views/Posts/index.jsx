import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './posts.css'
import { CgFeed } from 'react-icons/cg'
import { BiMessageMinus } from 'react-icons/bi'
import { AiFillCamera, AiOutlineSearch, AiOutlineSend } from 'react-icons/ai'
import { HiOutlinePhotograph } from 'react-icons/hi'
import Post from '../../components/Post'
import Notification from '../../components/Notification'
import { getMe, selectUserDetails, update, uploadAvatar } from '../../features/authentication/authenticationSlice'
import { createPost, getPosts, selectPosts } from '../../features/posts/postsSlice'

export default () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
        dispatch(getPosts())
    }, [])

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
            console.log('failure, cant post');
        }
    }

    //Get all posts
    const posts = useSelector(selectPosts)



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
                                <button type='submit'>Save </button>
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
                                            marginRight: "10px"
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
                                            height: "40px"
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
                                            height: '5%',
                                            width: '50%',
                                            borderRadius: '15px',
                                            marginTop: '3%'
                                        }} />
                                </>
                            }
                            <hr />

                            {
                                posts.posts.map((post) => {
                                    return (
                                        <Post />
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