import React from "react";
import "./notification.css";
import avatar from "../../assets/img/author-post.jpg";

export default () => {
  return (
    <>
      <div className="notification">
        <div className="leftnotif">
          <img src={avatar} alt="" />
        </div>
        <div className="rightnotif">
          <h6>New post from username</h6>
          <span>12:00</span>
        </div>
      </div>
    </>
  );
};
