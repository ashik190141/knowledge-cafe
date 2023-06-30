import React from 'react';
import './BlogInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const BlogInfo = (props) => {
    const { img, authorimg, authorname, blogtitle, publishdate,readtime } = props.blogs;
    const timeAdded = props.timeAdded;
    const bookMarkClick = props.bookMarkClick;
    return (
        <div className='blog-des'>
            <div className='cover-image'>
                <img src={img} alt="" className='cover-img' />
            </div>
            <div className='description'>
                <div className='author-des'>
                    <img src={authorimg} alt="" className='author-img' />
                    <div className="author-name">
                        <p className='authorName'>{authorname}</p>
                        <p>{publishdate}</p>
                    </div>
                </div>
                <div className="blog-read">
                    <p className='readTime'>{readtime} min read
                    <FontAwesomeIcon icon={faBookmark} className='bookmark-icon' onClick={()=>bookMarkClick(props.blogs)}/>
                    </p>
                </div>
            </div>
            <p className='blog-title'>{blogtitle}</p>
            <p className='hash'>#beginners #programming</p>
            <p onClick={()=>timeAdded(props.blogs)} className='mark'>Mark as Read</p>
            <hr/>
        </div>
    );
};

export default BlogInfo;