import React from 'react';
import PostListItem from './PostListItem';

const PostList = (props) => {
    return (
        <div className='post post__list-shape px-4 pt-3'>
            <a href=''>
                <div className='list-shape__title'>
                    Главное
                </div>
            </a>
            <div className='list-shape__list'>
                {props.posts.map( post => 
                    <PostListItem key={post.id} title={post.title} link={post.link} date={post.date} views={post.views} handleToggle={props.handleToggle}/>
                )}
           </div>
        </div>
    );
};

export default PostList;