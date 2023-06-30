import React, { useEffect, useState } from 'react';
import BlogInfo from '../BlogInfo/BlogInfo';
import './Blogs.css';
import History from '../History/History';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from '../Question/Question';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectBlog, setSelectBlog] = useState([]);
    const [titleSelects, setTitleSelects] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    const timeAdded = (blog) => {
        const timeAddedBlog = [...selectBlog, blog];
        setSelectBlog(timeAddedBlog);
    }

    const bookMarkClick = (selectedBlog) => {
        let exist = false;
        for (const titleSelect of titleSelects) {
            if (titleSelect.id === selectedBlog.id) {
                exist = true;
                break;
            }
        }
        if (exist === true) {
            toast.warning('You have already selected that bookmark',{position:toast.POSITION.TOP_CENTER,autoClose:3000});
        }
        const bookMarkClick = [...titleSelects, selectedBlog];
        setTitleSelects(bookMarkClick);
    }

    return (
        <div className='blog-container'>
            <div className='blog-details'>
                {
                    blogs.map(blog=><BlogInfo
                        key={blog.id}
                        blogs={blog}
                        timeAdded={timeAdded}
                        bookMarkClick={bookMarkClick}
                    ></BlogInfo>)
                }
            </div>
            <div className='blog-summary'>
                <History
                    selectBlog={selectBlog}
                    titleSelects={titleSelects}
                ></History>
            </div>
            <div className='que-ans'>
                <Question></Question>
            </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Blogs;