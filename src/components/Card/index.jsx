import { useState } from 'react';

import Heart from '../../assets/imgs/heart.svg';
import HeartFill from '../../assets/imgs/heartFilled.svg';
import Comment from '../../assets/imgs/comment.svg';
import Share from '../../assets/imgs/share.svg';
import Info from '../../assets/imgs/info.svg';
import './style.css';

const Card = ({ post }) => {
  const [ liked, setLiked ] = useState(false);

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <img src={HeartFill} alt="" className="cardIcon" />
        ) : (
          <img 
            src={Heart}
            alt=""
            className="cardIcon"
            onClick={() => setLiked(!liked)}
          />
        )}
        <img src={Comment} alt="" className="cardIcon" />
        <img src={Share} alt="" className="cardIcon" />
        <img src={Info} alt="" className="cardIcon" />
      </div>
    </div>
  );
};

export default Card;