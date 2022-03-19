import React from 'react';
import './post.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ReadMoreReact from 'read-more-react';
import { AiFillHeart } from 'react-icons/ai'
import Comment from '../Comment';


export default () => {

    const More = () => {
        return (
            <>
                <span style={{ cursor: "pointer", fontSize: "14px", color: "lightgrey" }}>read more ...</span>
            </>
        )
    }



    return (
        <div className="col-lg-12 show-up wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
            <div className="blog-post">

                <div className="postheader">


                    <div className="headerleft">
                        <img src="../../assets/images/author-post.jpg" />
                        <div className="postinfo">
                            <h6>By: Andrea Mentuzi</h6>
                            <span>12:00</span>
                        </div>
                    </div>

                    <div className="headerright">
                        <BsThreeDotsVertical className="postsettings" />
                    </div>

                </div>

                <div className="postText">
                    <ReadMoreReact
                        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                        min={300}
                        ideal={400}
                        max={450}
                        readMoreText={<More />}
                    />
                </div>

                <div className="thumb mt-2">
                    <a href="#"><img src="../../../public/assets/images/blog-post-01.jpg" /></a>
                </div>
                <div className="post-down-content">

                    <div className='post-down-header'> <AiFillHeart className='likeicon' /> <span>22 likes</span> </div>

                    <div className="comments">
                        <div className="commentform">
                            <img src="assets/images/author-post.jpg" />
                            <input type="text" placeholder=" write a comment !" />
                        </div>
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    )
}