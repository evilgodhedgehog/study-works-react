import React from "react";
import PostCellInfo from './PostCellInfo';

const PostCell = (props) => {
    
    return (
        <div className='post post__cell-shape'>
            <div className='post__cell-background'>
                <picture>
                    <img src={props.background} alt={props.title} />
                </picture>
            </div>
            <a href={props.link} className='post__cell-title text-white'>
                <span>
                    {props.title}
                </span>
            </a>
            <PostCellInfo date={props.date} link={props.link} views={props.views} handleToggle={props.handleToggle}/>
        </div>
    );
};

export default PostCell