import React from 'react';
import './post.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ReadMoreReact from 'read-more-react';
import { AiFillHeart } from 'react-icons/ai'
import Comment from '../Comment';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserDetails } from '../../features/authentication/authenticationSlice';
import moment from 'moment';
import { createComment } from '../../features/comments/commentsSlice';


export default ({ post }) => {

    //ReadMore package
    const More = () => {
        return (
            <>
                <span
                    style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "lightgrey"
                    }}>
                    read more ...
                </span>
            </>
        )
    }

    //userDetails selector (pour l'images)
    const userDetails = useSelector(selectUserDetails)

    //add (create) comment
    const dispatch = useDispatch()

    const addComment = (e) => {
        let data = {
            text: e.target.value,
            post: post._id
        }
        if (e.key === 'Enter') {
            dispatch(createComment(data))
            document.getElementById('cominput').value = ''
        }
    }



    return (
        <div className="col-lg-12 show-up wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
            <div className="blog-post">
                <div className="postheader">
                    <div className="headerleft">
                        <img
                            src={"http://localhost:5000/images/" + post.user.avatar}
                            alt=""
                        />
                        <div className="postinfo">
                            <h6>
                                By: {post.user.name}
                            </h6>
                            <span>
                                {moment(post.createdAt).fromNow()}
                            </span>
                        </div>
                    </div>

                    <div className="headerright">
                        <BsThreeDotsVertical className="postsettings" />
                    </div>

                </div>

                <div className="postText">
                    <ReadMoreReact
                        text={post.text}
                        min={300}
                        ideal={400}
                        max={450}
                        readMoreText={<More />}
                    />
                </div>
                {
                    post.iamge
                    &&
                    <div className="thumb mt-2">
                        <a
                            href="#"
                        >
                            <img
                                src="/assets/images/blog-post-01.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                }
                <div className="post-down-content">

                    <div className='post-down-header'>
                        <AiFillHeart className='likeicon' />
                        <span>22 likes</span>
                    </div>

                    <div className="comments">
                        <div className="commentform">
                            {
                                userDetails
                                &&
                                <img
                                    className='avatar_image'
                                    src={"http://localhost:5000/images/" + userDetails.avatar}
                                    alt=""
                                />
                            }
                            <input
                                onKeyDown={(e) => addComment(e)}
                                id='cominput'
                                type="text"
                                placeholder="Write a comment !"
                            />
                        </div>
                        {
                            post.comments.map(com => {
                                return (
                                    <Comment comment={com} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}