import React from 'react';
import './History.css';

const History = (props) => {
    const { selectBlog } = props;
    const { titleSelects } = props;
    console.log(titleSelects);

    let times = 0;
    for (const blog of selectBlog) {
        times = times + blog.readtime;
    }
    return (
        <div className='history'>
            <div>
                <p className='minute'>Spent time on read {times} min</p>
            </div>
            <div className='history-description'>
                <p className='totalSelect'>BookMarked Blogs: {titleSelects.length}</p>
                <div>
                    {
                        titleSelects.map(titleSelect => <p className='selectedtitle'>{titleSelect.blogtitle}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default History;