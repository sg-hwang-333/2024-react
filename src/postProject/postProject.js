import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const InputPost = function ({ handleInputPost }) {
    const [titles, setTitle] = useState('');
    const [contents, setContent] = useState('');

    const handleTitleOnChange = e => setTitle(e.target.value);
    const handleContentOnChange = e => setContent(e.target.value);

    return (
        <>
            <div>
                <div>제목</div>
                <input type='text' value={titles || ''} onChange={handleTitleOnChange} />
            </div>
            <div>
                <div>내용</div>
                <textarea value={contents || ''} onChange={handleContentOnChange}></textarea>
            </div>
            <button onClick={() => {
                if (titles.trim().length > 0 && contents.trim().length > 0) {
                    handleInputPost({ title: titles, content: contents, comments: [] })
                    setContent('');
                    setTitle('');
                } else {
                    alert('제목 및 내용을 제대로 입력해 주세요');
                }

            }}>게시</button>
        </>
    )
}

const ShowPost = function ({ posts, handleCommentDelete, handlePostDelete, handleInputComment }) {
    const [comment, setComment] = useState('');
    const handleCommentOnChange = e => setComment(e.target.value);

    return (
        <div>
            {
                posts.map((post, idx) => {
                
                    return (
                        <div>
                            <h1>{post.title}</h1>
                            <h4>{post.content}</h4>

                            <button onClick={() => handlePostDelete(idx)}>글 삭제</button>
                            <div>
                                <input type='text' onChange={handleCommentOnChange} placeholder='댓글을 입력하세요' />
                                <button onClick={() => {
                                    handleInputComment(idx, comment);
                                }}>게시</button>
                            </div>
                            <ul>
                                {
                                    post.comments.map((comm, index) => {
                                        return (
                                            <li>{comm} <button onClick={() => handleCommentDelete(idx, index)}>삭제</button></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    )
                })
            }
        </div>
    )
}

const PostProject = function (props) {

    const [posts, setPosts] = useState([
        { title: "제목1", content: "내용1", comments: ["댓글1", "댓글2", "댓글3"] },
        { title: "제목2", content: "내용2", comments: ["댓글1", "댓글2"] }
    ]);

    const handleInputPost = post => {
        setPosts(posts.concat(post));
    }


    const handlePostDelete = index => {
        setPosts(posts.filter((_, idx) => {
            return idx !== index;
        }))
    }


    const handleInputComment = (index, comment) => {
        setPosts(posts.map((post, idx) => {
            if (idx === index) {
                post = { ...post, comments: post.comments.concat(comment) };
            }

            return post;
        }))
    }

    const handleCommentDelete = (postIdx, commentIdx) => {
        setPosts(posts.map((post, idx) => {
            if (postIdx === idx) {
                post = { ...post, comments: post.comments.filter((_,index) => {
                    return index !== commentIdx;
                })}
            }
            return post;
        }))
    }



    return (
        <div>
            <InputPost handleInputPost={handleInputPost} />
            <ShowPost posts={posts} handleCommentDelete={handleCommentDelete} handlePostDelete={handlePostDelete} handleInputComment={handleInputComment} />
        </div>
    )
}

root.render(<PostProject />)